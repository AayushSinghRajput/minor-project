const axios = require("axios");

const analyzeCameraController = async (req, res) => {
  try {
    if (!req.file || !req.file.image) {
      return res
        .status(400)
        .json({ message: "No image data found in the request." });
    }
    console.log("Received image file, converting to base64");
    // Directly use the base64 string from the frontend
    const base64Image = req.file.image;
    // const fileType = req.body.fileType; //optional

    // Send base64-encoded image to the ML model
    const response = await axios.post("http://localhost:8000/predict_camera", {
      image: base64Image,
      // fileType: fileType, //send file type if required by the ml model
    });
    console.log("Prediction result received from Flask:", response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      console.error("ML model server error:", error.response.data);
      res.status(error.response.status).send({
        message: "ML model server error",
        details: error.response.data,
      });
    } else if (error.request) {
      console.error("No response from ML model server:", error.request);
      res.status(500).send({ message: "No response from ML model server" });
    } else {
      console.error("Error calling ML model:", error.message);
      res
        .status(500)
        .send({ message: "Failed to analyze image", details: error.message });
    }
  }
};

module.exports = { analyzeCameraController };
