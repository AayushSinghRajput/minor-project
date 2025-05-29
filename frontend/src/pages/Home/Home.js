import React from "react";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import CustomerFavorite from "../../Components/CustomerFavorite/CustomerFavorite";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="left-container">
          <h2>Welcome to Skin Analyzer</h2>
          <p>
            Discover the future of skincare with AI-powered technology! Analyze
            your skin instantly, receive personalized recommendations, and take
            the first step toward healthier, radiant skin. Upload your photo or
            capture one now to begin your journey to a better skincare routine.
          </p>
          <p className="notice">
            Notice: All uploaded photos are processed securely, and your privacy
            is our priority.
          </p>
        </div>
        <div className="right-container">
          <img src="/assets/home-image.avif" alt="Skin Analysis" />
        </div>
      </div>
      <div className="customer-favorite">
        <CustomerFavorite />
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
