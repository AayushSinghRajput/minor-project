const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const sendVerificationEmail = require("../utils/sendVerificationEmail");
const generateEmailVerificationToken = require("../utils/generateEmailVerificationToken");
//sign-up controller
const signController = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    //Check if user already exits
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    //Save the user
    await newUser.save();
    console.log("New User:", newUser);
    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ message: "User created successfully.", token });
    // //Generate email verification token
    // const token = generateEmailVerificationToken(newUser._id);
    // // Send verification email
    // await sendVerificationEmail(newUser.email, token);
    // return res.status(201).json({
    //   message: "User created successfully.Please check your email to verify.",
    // });
  } catch (error) {
    console.log("Error in signController:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

//login controller
const loginController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    //Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }
    //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentails!" });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
//logout controller
const logoutController = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { signController, loginController, logoutController };
