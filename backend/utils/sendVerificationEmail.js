require("dotenv").config(); // Load .env variables
const mailgun = require("mailgun-js");

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  throw new Error("MAILGUN_API_KEY and MAILGUN_DOMAIN must be defined!");
}

const mg = new mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const sendVerificationEmail = async (userEmail, verificationToken) => {
  const verificationUrl = `http://localhost:5000/verify-email/${verificationToken}`;

  const data = {
    from: `Verification Service <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: ${verificationUrl}`,
    html: `
      <p>Please click the following link to verify your email:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
    `,
  };

  try {
    const body = await mg.messages().send(data);
    console.log("Verification email sent:", body);
  } catch (error) {
    console.error("Error sending verification email:", error.message);
  }
};

module.exports = sendVerificationEmail;
