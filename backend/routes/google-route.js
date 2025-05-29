const express = require("express");
const googleRouter = express.Router();
const googleController = require("../controllers/googlecontroller");
googleRouter.post("/google-login", googleController);

module.exports = { googleRouter };
