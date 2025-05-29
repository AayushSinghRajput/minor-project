const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controllers/contactcontroller");

contactRouter.post("/contact", contactController);
module.exports = { contactRouter };
