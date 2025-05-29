import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signout.css";

const Signout = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    alert("You have been signed out successfully!");
    navigate("/login");
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="signout-container">
      <h2>Are you sure you want to sign out?</h2>
      <div className="signout-buttons">
        <button className="yes-btn" onClick={handleSignOut}>
          Yes
        </button>
        <button className="no-btn" onClick={handleCancel}>
          No
        </button>
      </div>
    </div>
  );
};

export default Signout;
