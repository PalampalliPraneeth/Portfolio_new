import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import SocialMediaIcons from "./components/SocialMediaIcons/SocialMediaIcons";
import Certifications from "./components/Certifications/Certifications";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <ContactMe />
      </div>
      <SocialMediaIcons/>
      <Footer />
    </>
  );
};

export default App;
