const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");

//Email verification route
const verifyEmailController = async (req, res) => {
  const { token } = req.params;
  try {
    //verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //find user by id from the decoded token
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Mark user as verified
    user.isVerified = true;
    await user.save();
    res.json({ message: "Email verified successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid or expired verification token" });
  }
};
module.exports = { verifyEmailController };
