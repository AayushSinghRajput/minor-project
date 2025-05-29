const nodemailer = require("nodemailer");

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // our email
    pass: process.env.EMAIL_PASSWORD, // our email password
  },
});

module.exports = transporter;
