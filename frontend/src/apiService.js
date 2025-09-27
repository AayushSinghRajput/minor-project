// apiService.js - Centralized API service for making HTTP requests

import axios from 'axios';
import config from './config';

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// API methods
const apiService = {
  // Auth endpoints
  login: (credentials) => apiClient.post('/login', credentials),
  signup: (userData) => apiClient.post('/sign', userData),
  googleLogin: (token) => apiClient.post('/google-login', { token }),
  resetPassword: (email,newPassword) => apiClient.post('/reset-password', { email ,newPassword }),
  
  // Analysis endpoints
  analyzeImage: (imageData) => apiClient.post('/predict', imageData),
  analyzeCamera: (imageData) => apiClient.post('/predict_camera', imageData),
  
  // Other endpoints
  contact: (formData) => apiClient.post('/contact', formData),
};

export default apiService;