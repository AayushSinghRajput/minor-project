import React, { use, useState } from "react";
import "./Login.css";
import GoogleLoginButton from "../../Components/GoogleLoginButton/GoogleLoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetData, setResetData] = useState({
    email: "",
    newPassword: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleResetChange = (e) => {
    const { id, value } = e.target;
    setResetData({ ...resetData, [id]: value });
  };
  const handlelogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
      console.log("Backend Response:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/service");
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
        console.log(error);
      } else {
        alert("An unexpected error occured. Please try again.");
      }
    }
  };
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const { email, newPassword } = resetData;
    try {
      const response = await axios.post(
        "http://localhost:5000/reset-password",
        { email, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
      setShowResetModal(false);
    } catch (error) {
      alert(error.response?.data.message || "An unexpected error occured.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="left-content">
          <h2>Welcome to Skinanalyzer</h2>
          <p>
            Discover the future of skincare with AI-powered technology! Analyze
            your skin instantly, receive personalized recommendations, and take
            the first step toward healthier, radiant skin. Upload your photo or
            capture one now to begin your journey to a better skincare routine.
            Notice: All uploaded photos are processed securely, and your privacy
            is our priority.
          </p>
        </div>
      </div>

      <div className="login-right-container">
        <div className="right-header">
          <img
            src="/assets/logoAI.png
          "
            alt="Logo"
            className="logo-icon"
          />
          <span>SKINANALYZER</span>
        </div>
        <form className="login-form" onSubmit={handlelogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <small>We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="remember-me"
              className="form-check-input"
            />
            <label htmlFor="remember-me" className="form-check-label">
              Remember Me
            </label>
          </div>
          <div className="forget-container">
            <a
              href="#"
              className="forgot-password"
              onClick={() => setShowResetModal(true)}
            >
              Forgot Password?
            </a>
            <p className="forget-para">
              Don't have an account?
              <a href="/signup" className="forget-sign">
                Sign
              </a>
            </p>
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
          <GoogleLoginButton />
        </form>
      </div>
      {/* Reset Password Modal */}
      {showResetModal && (
        <div
          className="reset-modal"
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div className="modal-content">
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Reset Password
            </h3>
            <form onSubmit={handlePasswordReset}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={resetData.email}
                  onChange={handleResetChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  className="form-control"
                  placeholder="Enter your new password"
                  value={resetData.newPassword}
                  onChange={handleResetChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-submit"
                style={{ marginTop: "10px" }}
              >
                Reset Password
              </button>
              <button
                style={{ marginTop: "10px", width: "100%" }}
                type="button"
                className="btn-submit"
                onClick={() => setShowResetModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
