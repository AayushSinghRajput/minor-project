import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-container">
        <img
          src="/assets/success-icon.png"
          alt="Success"
          className="success-icon"
        />
        <h1>Payment Successful!</h1>
        <p>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <p>
          Order ID: <strong>#123456</strong>
        </p>
        <p>You will receive a confirmation email with order details shortly.</p>

        <div className="success-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/product")}
          >
            View My Orders
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
