const express = require("express");
const analyzeCameraRouter = express.Router();
const { parseFile } = require("../middlewares/parseFile");
const {
  analyzeCameraController,
} = require("../controllers/analyzecameracontroller");

//route to handle prediction
analyzeCameraRouter.post("/predict_camera", parseFile, analyzeCameraController);
module.exports = { analyzeCameraRouter };
