const Contact = require("../models/ContactSchema");
const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }
    //create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to send message.Please try again." });
  }
};
module.exports = contactController;
