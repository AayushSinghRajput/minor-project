import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "./GoogleLoginButton.css";
import apiService from "../../apiService";

const GoogleLoginButton = () => {
  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const accessToken = tokenResponse.access_token;
        if (!accessToken) {
          throw new Error("No Access token found");
        }
        // Send the ID token to the backend using apiService
        const result = await apiService.googleLogin(accessToken);
        const { user } = result.data; //Get user info from the response
        if (user) {
          alert(`Welcome, ${user.name}`);
          //redirect to service page
          window.location.href = "/service";
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      alert("Login failed. Please try again.");
    },
  });

  return (
    <button className="google-button" onClick={() => handleLogin()}>
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;