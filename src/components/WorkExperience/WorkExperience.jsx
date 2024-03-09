import React, { useRef, useState } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    if (currentSlide < WORK_EXPERIENCE.length - settings.slidesToShow) {
      sliderRef.current.slickNext();
    }
  };

  const slideLeft = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section id='work-exp' className="experience-container">
      <h5>Projects</h5>

      <div className="experience-content">
        {/* Conditionally render the right arrow icon */}
        {currentSlide < WORK_EXPERIENCE.length - settings.slidesToShow && (
          <div className="arrow-right" onClick={slideRight}>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        )}

        {/* Conditionally render the left arrow icon */}
        {currentSlide > 0 && (
          <div className="arrow-left" onClick={slideLeft}>
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
        )}

        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;  