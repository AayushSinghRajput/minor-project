import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <p>Last updated:{currentDate}</p>
      <div className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to SkinAlyzer. These Terms of Service govern your use of our
          website and services provided by us. By accessing or using the
          platform, you agree to comply with these terms.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Account Registration</h2>
        <p>
          To use certain features of the platform, you may be required to
          register an account. You agree to provide accurate and complete
          information during the registration process and to update it as
          necessary.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Privacy and Data Collection</h2>
        <p>
          Your privacy is important to us. We collect personal information only
          when necessary to provide services. By using the platform, you consent
          to our privacy practices as described in the Privacy Policy.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. User Responsibilities</h2>
        <p>
          You are responsible for your actions while using our platform. You
          agree to use the services in compliance with all applicable laws and
          not to engage in any unlawful activities.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Restrictions</h2>
        <p>
          You agree not to reverse engineer, decompile, or otherwise attempt to
          extract the source code of our platform, except as expressly permitted
          by law.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Disclaimers</h2>
        <p>
          The platform and services are provided "as is" without any warranties.
          We do not guarantee the accuracy, reliability, or completeness of the
          services.
        </p>
      </div>

      <div className="terms-section">
        <h2>7. Limitation of Liability</h2>
        <p>
          We will not be held liable for any direct, indirect, incidental, or
          consequential damages arising out of your use of the platform or
          services.
        </p>
      </div>

      <div className="terms-section">
        <h2>8. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of [Your Country]. Any legal action regarding
          these terms will be subject to the jurisdiction of the courts in [Your
          Location].
        </p>
      </div>

      <div className="terms-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms of
          Service, please contact us at:{" "}
          <a href="mailto:support@skinalyzer.com">support@skinalyzer.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
