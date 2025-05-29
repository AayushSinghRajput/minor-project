const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const resetController = async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email and new password are required." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured.Please try again later." });
  }
};
module.exports = resetController;
