import React, { Children } from "react";
import { Navigate } from "react-router-dom";

// This function can be modified based on how you are handling authentication (e.g., using a token).
const isAuthenticated = () => {
  return localStorage.getItem("token"); // Check if a token exists
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
