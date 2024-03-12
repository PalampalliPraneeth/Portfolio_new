import React from "react";
import "./MobileNav.css";
import resumeFile from "../../../Resume_Software.pdf";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    try {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "PraneethKumarReddy.pdf";
  
      // Trigger a click event to download the file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img className="logo" src="./assets/images/logo.svg" alt="" /> */}

          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Projects
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("timeline")} className="menu-item">
                Timeline
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("certifications")} className="menu-item">
               Certifications
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact
              </a>
            </li>

            <button className="contact-btn" onClick={handleDownloadResume}>
              Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
