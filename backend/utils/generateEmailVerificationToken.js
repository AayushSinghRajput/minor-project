const jwt = require("jsonwebtoken");

const generateEmailVerificationToken = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (error) {
    console.error("Error generating email verification token:", error);
    throw new Error("Error generating token");
  }
};
module.exports = generateEmailVerificationToken;
