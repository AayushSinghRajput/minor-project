const dotenv = require("dotenv");
// Load environment variables first, before any other code runs
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db/dbConnect");
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

// Environment variables already loaded at the top of the file

// Set environment-specific variables
const NODE_ENV = process.env.NODE_ENV || 'development';

// Allow multiple frontend URLs for flexibility
const allowedOrigins = [
  'http://localhost:3000',                         // Local development
  'https://minor-project-frontend-murex.vercel.app' // Production
];

const FRONTEND_URL = process.env.FRONTEND_URL || (NODE_ENV === 'production' 
  ? 'https://minor-project-frontend-murex.vercel.app'
  : 'http://localhost:3000');

const FLASK_URL = process.env.FLASK_URL || (NODE_ENV === 'production'
  ? 'https://minor-project-ml.onrender.com'
  : 'http://localhost:8000');

// Configure CORS to allow requests from multiple origins
app.use(
  cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      
      if(allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
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
