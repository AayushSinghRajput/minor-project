import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>
          At SkinAlyzer, we respect your privacy and are committed to protecting
          the personal information you share with us. This Privacy Policy
          outlines how we collect, use, and safeguard your personal data when
          you use our website and services.
        </p>
      </div>
      <div className="main-container">
        <div className="container">
          <h2>1. Information We Collect</h2>
          <p>
            We collect the following types of personal information when you use
            our website:
          </p>
          <ul>
            <li>
              <strong>Personal Identification Information:</strong> This
              includes your name, email address, contact information, and any
              other details you provide when registering or using our services.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information on how you use
              our website, including your IP address, browser type, and pages
              visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience on our website. Cookies are small files stored on your
              device that help us recognize you and analyze how you use our
              services.
            </li>
          </ul>
        </div>
        <div className="container">
          <h2>2. How We Use Your Information</h2>
          <p>The information we collect is used for the following purposes:</p>
          <ul>
            <li>
              To personalize your experience and provide you with tailored
              content.
            </li>
            <li>To improve our website’s functionality and performance.</li>
            <li>
              To send periodic emails regarding updates, promotions, or
              services.
            </li>
            <li>
              To respond to inquiries, support requests, or customer service
              needs.
            </li>
          </ul>
        </div>
        <div className="container">
          <h2>3. How We Protect Your Information</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. These include encryption, firewalls,
            and secure servers to protect your data from unauthorized access,
            disclosure, or misuse.
          </p>
        </div>
        <div className="container">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted service
            providers who assist us in operating our website or providing
            services to you.
          </p>
        </div>
        <div className="container">
          <h2>5. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              Access, correct, or delete the personal information we hold about
              you.
            </li>
            <li>Opt-out of receiving marketing communications at any time.</li>
            <li>
              Request to restrict the processing of your data in certain
              circumstances.
            </li>
          </ul>
        </div>
        <div className="container">
          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review it
            regularly to stay informed about how we are protecting your personal
            information.
          </p>
        </div>
        <div className="container">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy
            or how we handle your personal data, please contact us at:
          </p>
          <p>
            Email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@skinalyzer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@skinalyzer.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
