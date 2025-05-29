import cv2
import numpy as np
import base64
import re
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})  # Allow requests from Express server

# Load the trained model
# MODEL_PATH = "./models/skin_type_model.h5"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "skin_type_model.h5")
model = load_model(MODEL_PATH)

# Define class names
CLASS_NAMES = ["acne_skin", "dry_skin", "healthy_skin", "oily_skin"]

# Initialize LabelEncoder and fit it with class names
le = LabelEncoder()
le.fit(CLASS_NAMES)


# Utility Functions
def apply_clahe(image, clip_limit=5.0, tile_grid_size=(8, 8)):
    """
    Apply CLAHE (Contrast Limited Adaptive Histogram Equalization) to an image.
    Returns an enhanced image.
    """
    lab_image = cv2.cvtColor(image, cv2.COLOR_BGR2LAB)
    l_channel, a_channel, b_channel = cv2.split(lab_image)
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tile_grid_size)
    enhanced_l_channel = clahe.apply(l_channel)
    enhanced_lab_image = cv2.merge((enhanced_l_channel, a_channel, b_channel))
    enhanced_image = cv2.cvtColor(enhanced_lab_image, cv2.COLOR_LAB2BGR)
    return cv2.cvtColor(enhanced_image, cv2.COLOR_BGR2RGB)


def decode_base64_image(base64_string):
    """
    Decode a base64-encoded image.
    Returns the OpenCV image.
    """
    if base64_string.startswith('data:image'):
        base64_string = base64_string.split(',')[1]

    img_data = base64.b64decode(base64_string)
    np_img = np.frombuffer(img_data, np.uint8)
    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    return img


def format_class_name(predicted_class):
    """ Format the class name to be human-readable. """
    return ''.join([word.capitalize() for word in predicted_class.split('_')])


def detect_and_save_faces(image):
    """
    Detect faces in an image and save the cropped face.
    Args:
        image: The input image (OpenCV format).
    Returns:
        - Cropped face image if a face is detected.
        - None if no face is detected.
    """
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    if len(faces) == 0:
        return None  # No face detected
    else:
        x, y, w, h = faces[0]  # Use the first detected face
        face_crop = image[y:y + h, x:x + w]
        return face_crop


def preprocess_and_predict(image, is_camera=False):
    """
    Preprocess an image and make a prediction.
    Args:
        image: The input image (OpenCV format).
        is_camera: Whether the image is from a camera (requires face detection).
    Returns:
        - Predicted class name
        - Prediction probabilities
    """
    try:
        if is_camera:
            # Detect and crop the face for camera images
            face_crop = detect_and_save_faces(image)
            if face_crop is None:
                raise ValueError("No face detected in the image.")
            image = face_crop

        # Resize and apply CLAHE
        image = cv2.resize(image, (224, 224))
        image = apply_clahe(image)
        image = image / 255.0  # Normalize pixel values
        image = np.expand_dims(image, axis=0)  # Add batch dimension

        # Make prediction
        prediction = model.predict(image)
        predicted_class_index = np.argmax(prediction)
        predicted_class = le.inverse_transform([predicted_class_index])[0]

        # Format class name
        formatted_class_name = format_class_name(predicted_class)
        return formatted_class_name, prediction.tolist()

    except Exception as e:
        print(f"Error during prediction: {e}")
        return None, None


# Routes
@app.route('/predict', methods=['POST'])
def predict_local():
    """
    Endpoint to handle image upload (base64) and return predictions.
    """
    try:
        # Check if image data is in the request
        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({"error": "No image data in request."}), 400

        image_base64 = data['image']
        image_base64 = re.sub(r"^data:image\/[a-zA-Z]+;base64,", "", image_base64)

        # Decode the base64 image
        image = decode_base64_image(image_base64)
        if image is None:
            return jsonify({"error": "Invalid image format."}), 400

        # Perform prediction
        formatted_class_name, prediction_probabilities = preprocess_and_predict(image, is_camera=False)

        if formatted_class_name:
            return jsonify({
                "predicted_class": formatted_class_name,
                "prediction_probabilities": prediction_probabilities
            })
        else:
            return jsonify({"error": "Prediction failed."}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/predict_camera', methods=['POST'])
def predict_camera():
    """
    Endpoint to handle image upload (base64) from a camera and return predictions.
    """
    try:
        # Check if image data is in the request
        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({"error": "No image data in request."}), 400

        image_base64 = data['image']
        image_base64 = re.sub(r"^data:image\/[a-zA-Z]+;base64,", "", image_base64)

        # Decode the base64 image
        image = decode_base64_image(image_base64)
        if image is None:
            return jsonify({"error": "Invalid image format."}), 400

        # Perform prediction with face detection
        formatted_class_name, prediction_probabilities = preprocess_and_predict(image, is_camera=True)

        if formatted_class_name:
            return jsonify({
                "predicted_class": formatted_class_name,
                "prediction_probabilities": prediction_probabilities
            })
        else:
            return jsonify({"error": "Prediction failed or no face detected."}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Run the Flask server
if __name__ == '__main__':
    port =int(os.environ.get('PORT',8000))
    app.run(host="0.0.0.0", port=port, debug=True)