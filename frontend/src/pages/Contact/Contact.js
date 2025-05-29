import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("An error occured. Please try again.");
    }
  };
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Feel free to reach out with any questions,
          feedback, or concerns.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
          {responseMessage && (
            <p className="response-message">{responseMessage}</p>
          )}
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> support@skinalyzer.com
          </p>
          <p>
            <strong>Phone:</strong> +977 980 598 1169
          </p>
          <p>
            <strong>Address:</strong> Putaliline , Dharan-Sunsari
          </p>

          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113965.00971450818!2d87.19370827234049!3d26.795180593318264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef419fc7271c1d%3A0x1d1300367590c002!2sDharan!5e0!3m2!1sen!2snp!4v1735531519612!5m2!1sen!2snp"
              style={{ width: "400", height: "300", border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
