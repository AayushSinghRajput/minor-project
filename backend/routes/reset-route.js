const express = require("express");
const resetRouter = express.Router();
const resetController = require("../controllers/resetcontroller");
resetRouter.post("/reset-password", resetController);
module.exports = { resetRouter };
