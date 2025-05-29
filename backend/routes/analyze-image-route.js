const express = require("express");
const analyzeRouter = express.Router();
const { parseFile } = require("../middlewares/parseFile");
const { analyzeController } = require("../controllers/analyzeimagecontroller");

//route to handle prediction
analyzeRouter.post("/predict", parseFile, analyzeController);
module.exports = { analyzeRouter };
