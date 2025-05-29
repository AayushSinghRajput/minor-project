const express = require("express");
const signRouter = express.Router();
const loginRouter = express.Router();
const logoutRouter = express.Router();
const verifyEmailRouter = express.Router();
const {
  signController,
  loginController,
  logoutController,
} = require("../controllers/authcontroller");
const {
  verifyEmailController,
} = require("../controllers/verifyEmailController");

//route to signup
signRouter.post("/sign", signController);
//route to login
loginRouter.post("/login", loginController);
//route to logout
logoutRouter.post("/logout", logoutController);
//route to verify email
verifyEmailRouter.get("/verify-email/:token", verifyEmailController);

module.exports = { signRouter, loginRouter, logoutRouter, verifyEmailRouter };
