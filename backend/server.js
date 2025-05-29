const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db/dbConnect");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const {
  signRouter,
  loginRouter,
  logoutRouter,
  verifyEmailRouter,
} = require("./routes/auth-route");
const { analyzeRouter } = require("./routes/analyze-image-route");
const { analyzeCameraRouter } = require("./routes/analyze-camera-route");
const { contactRouter } = require("./routes/contact-route");
const { googleRouter } = require("./routes/google-route");
const { resetRouter } = require("./routes/reset-route");

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//Connect to the database
dbConnection();

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//routes
app.use(signRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(verifyEmailRouter);
app.use(analyzeRouter);
app.use(analyzeCameraRouter);
app.use(contactRouter);
app.use(googleRouter);
app.use(resetRouter);

//Example Routes
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
