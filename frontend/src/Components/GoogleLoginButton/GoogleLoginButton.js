import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./GoogleLoginButton.css";

const GoogleLoginButton = () => {
  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Token Response:", tokenResponse);
        const accessToken = tokenResponse.access_token;
        console.log("Access Token:", accessToken);
        if (!accessToken) {
          throw new Error("No Access token found");
        }
        // Send the ID token to the backend
        const result = await axios.post(
          "http://localhost:5000/google-login",
          {
            token: accessToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Login Successful:", result.data);
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
