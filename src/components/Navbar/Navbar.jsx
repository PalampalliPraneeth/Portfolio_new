import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";
import resumeFile from "../../Resume_Software.pdf";


function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
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
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img className="logo" src="./assets/images/logo.svg" alt="" /> */}
          <h1>P Praneeth Kumar Reddy</h1>

          <ul>
            <li>
              <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Home</Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Skills</Link>
            </li>

            <li>
              <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Projects</Link>
            </li>
            
            <li>
              <Link activeClass="active" to="timeline" smooth spy offset={-100} className="menu-item">Timeline</Link>
            </li>

            <li>
              <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Contact</Link>
            </li>

            <li>
              {/* <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Resume</Link> */}
              <input type="button" className="downloadButton" value="Resume" smooth spy offset={-100} onClick={handleDownloadResume} />
            </li>

            {/* <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button> */}
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
