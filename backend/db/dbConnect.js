const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    //Connect to MongoDB using the MONGO_URI from the .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); //Exit process with failure
  }
};
module.exports = dbConnection;
