const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"], // Optional email validation
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false, //New users are not verified by default
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
