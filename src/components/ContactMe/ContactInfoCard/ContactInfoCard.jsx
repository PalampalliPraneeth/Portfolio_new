import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${text}`;
  };

  return (
    <div className="contact-details-card" onClick={handleEmailClick}>
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
