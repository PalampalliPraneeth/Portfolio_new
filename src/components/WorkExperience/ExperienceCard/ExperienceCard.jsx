import React from "react";
import "./ExperienceCard.css";
import EyeIcon from "../../../vision.png"
import GitIcon from "../../../github.png"

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6 style={{display:"flex"}}>
        {details.title}
      {details.webUrl && (
          <a href={details.webUrl} target="_blank" rel="noopener noreferrer" className="title-icon">
            <img
              src={EyeIcon}
              alt="EyeIcon"
              style={{ width: "20px", height: "auto", marginLeft: "0.4rem", cursor: "pointer" }}
            />
          </a>
        )}
      {details.gitUrl && (
          <a href={details.gitUrl} target="_blank" rel="noopener noreferrer" className="title-icon">
            <img
              src={GitIcon}
              alt="GitIcon"
              style={{ width: "20px", height: "auto", marginLeft: "0.4rem", cursor: "pointer" }}
            />
          </a>
        )}
      </h6>
      {/* <div className="work-duration">{details.date}</div> */}
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
