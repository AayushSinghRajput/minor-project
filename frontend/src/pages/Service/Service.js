import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Service.css";

const Service = () => {
  const [imageSrc, setImageSrc] = useState(null); //Base64 encoded image
  const [cameraMode, setCameraMode] = useState(false);
  const [classificationResult, setClassificationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  //camera or localstorage
  const [imageSource, setImageSource] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    setCameraMode(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert(
        "Failed to access camera. Please ensure you have granted permission."
      );
      setCameraMode(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL("image/png"); //convert to base64
      setImageSrc(dataURL);

      //new logic
      setImageSource("camera");

      // Stop the camera stream
      const stream = video.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      setCameraMode(false);
    }
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); //base64 encoded image

        //new logic
        setImageSource("local");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const convertToPascalCase = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  useEffect(() => {
    if (classificationResult) {
      const predictedClass = classificationResult.predicted_class;

      // Dynamically import the corresponding product file
      const loadProducts = async () => {
        try {
          let productsData = [];
          switch (predictedClass) {
            case "AcneSkin":
              productsData = (
                await import("../../data/AcneProduct/AcneProduct")
              ).default;
              break;
            case "DrySkin":
              productsData = (await import("../../data/DryProduct/DryProduct"))
                .default;
              break;
            case "HealthySkin":
              productsData = (
                await import("../../data/NormalProduct/NormalProduct")
              ).default;
              break;
            case "OilySkin":
              productsData = (
                await import("../../data/OilyProduct/OilyProduct")
              ).default;
              break;
            default:
              productsData = [];
          }
          setProducts(productsData); // Set the loaded products
        } catch (error) {
          console.error("Error loading products:", error);
        }
      };

      loadProducts();
    }
  }, [classificationResult]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (!imageSrc) {
      alert("Please upload or capture an image first.");
      return;
    }
    setLoading(true);
    setClassificationResult(null);

    try {
      //new logic
      const endpoint =
        imageSource === "camera"
          ? "http://localhost:5000/predict_camera"
          : "http://localhost:5000/predict";
      const response = await axios.post(
        endpoint,
        {
          image: imageSrc, //sending base64 string
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //Extract prediction probabilities and find the highest one
      if (
        !response.data.prediction_probabilities ||
        !Array.isArray(response.data.prediction_probabilities) ||
        !Array.isArray(response.data.prediction_probabilities[0])
      ) {
        throw new Error("Invalid prediction probabilities in response.");
      }
      //Flatten the nested array of prediction probabilities
      const predictionProbabilities = response.data.prediction_probabilities[0];
      //find the maximum proability and corresponding class
      const maxProbability = Math.max(...predictionProbabilities);
      const highestClassIndex = predictionProbabilities.indexOf(maxProbability);
      //Define class names
      const classNames = ["acne_skin", "dry_skin", "healthy_skin", "oily_skin"];
      //Find the class with the highest probability
      const highestClass = classNames[highestClassIndex] || "Unknown Class";
      //Update the classification result
      setClassificationResult({
        predicted_class: convertToPascalCase(highestClass),
        highest_prediction: `${highestClass} with ${Math.round(
          maxProbability * 100
        )}% confidence.`,
        prediction_probabilities: predictionProbabilities,
      });
    } catch (error) {
      console.error("Error analyzing image: ", error);
      alert("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-container">
      <div className="outer-container">
        <div className="image-container">
          {cameraMode ? (
            <div className="camera-view">
              <video ref={videoRef} className="video-feed"></video>
              <button onClick={captureImage} className="capture-button">
                Capture Image
              </button>
            </div>
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt="Captured or Uploaded"
              className="uploaded-image"
            />
          ) : (
            <p>Upload or capture an image to preview it here.</p>
          )}
        </div>
        {!cameraMode && (
          <div className="controls">
            <label className="control-label">
              Upload from PC:
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={uploadImage}
                className="upload-input"
              />
            </label>
            <button onClick={startCamera} className="action-button">
              Capture from Camera
            </button>
            <button
              className="action-button"
              onClick={handleButtonClick}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
          </div>
        )}

        {classificationResult && (
          <div className="result">
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Classification Result:
            </h3>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {classificationResult.predicted_class}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
              {convertToPascalCase(classificationResult.highest_prediction)}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: " var(--text-color)",
              }}
            >
              Other predictions:{" "}
              {classificationResult.prediction_probabilities.join(", ")}
            </p>
          </div>
        )}
      </div>
      {/* display products  */}
      {products.length > 0 ? (
        <div className="service-products-container">
          <h4>Recommended Products:</h4>
          <div className="service-products-cards">
            {products.map((product) => (
              <div className="service-product-card" key={product.name}>
                <div className="service-product-photo">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="service-product-image"
                  />
                </div>
                <div className="service-product-description">
                  <h5>{product.name}</h5>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Benefits:</strong> {product.benefits}
                  </p>
                  <p>
                    <strong>Skin Type:</strong> {product.skinType}
                  </p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p>
                    <strong>Rating:</strong> {product.rating} / 5
                  </p>
                  <p>
                    <strong>Ingredients:</strong>{" "}
                    {product.ingredients.join(", ")}
                  </p>
                  <p>
                    <strong>Potential Allergens:</strong>{" "}
                    {product.potentialAllergens.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No products available for this classification.</p>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default Service;
