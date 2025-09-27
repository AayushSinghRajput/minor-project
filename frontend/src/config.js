// config.js - Central configuration for environment-specific settings

// Determine if we're in production based on environment variables
const isProduction = process.env.NODE_ENV === 'production';

// Set the base URLs for API endpoints
const config = {
  // Backend API URL
  apiUrl: isProduction 
    ? process.env.REACT_APP_API_URL || 'https://minor-project-backend-i814.onrender.com'
    : 'http://localhost:5000',
  
  // Any other environment-specific configurations
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
};

export default config;