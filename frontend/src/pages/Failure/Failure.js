import React from "react";
import { useNavigate } from "react-router-dom";
import "./Failure.css";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="failure-page">
      <div className="failure-container">
        <img
          src="/assets/failure-icon.png"
          alt="Failed"
          className="failure-icon"
        />
        <h1>Payment Failed</h1>
        <p>Oops! Something went wrong while processing your payment.</p>
        <p>Please check your payment details and try again.</p>

        <div className="failure-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Retry Payment
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
