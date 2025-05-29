import React from "react";
import "./Team.css";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const goToAboutPage = () => {
    navigate("/about");
  };
  const teamMembers = [
    {
      name: "Aayush Kumar Singh",
      role: "MERN Stack Developer",
      description: "With over 3 years of experience in mern stack development.",
      image: "/assets/aayush.jpg",
    },
    {
      name: "Ashmita Karki",
      role: "Skincare Expert",
      description: "An expert in creating personalized skincare routines.",
      image: "/assets/Ashmita.jpg",
    },
    {
      name: "Bhanu Prasad Chaudhary",
      role: "UX/UI Designer",
      description: "Ensuring the platform is intuitive and user-friendly.",
      image: "/assets/bhanu.jpg",
    },
    {
      name: "Bishal Sharma",
      role: "AI Engineer",
      description: "Specializing in AI algorithms and data processing.",
      image: "/assets/bishal.jpg",
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="memeber-role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={goToAboutPage}>
        Back
      </button>
    </div>
  );
};

export default Team;
