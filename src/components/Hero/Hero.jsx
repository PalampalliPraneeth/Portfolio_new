import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Hi There, I'm Praneeth</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/Grad.jpeg" alt="" style={{borderRadius: '20px'}}  />
        </div>

        <div>
          {/* <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div> */}
          {/* <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div> */}
          <div className="tech-icon">
            <img src="./assets/images/Angular.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/Typescript.png" alt="" />
          </div>
          {/* <div className="tech-icon">
            <img src="./assets/images/Next.png" alt="" />
          </div> */}
          <div className="tech-icon">
            <img src="./assets/images/Mongo.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
