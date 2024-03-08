import React from "react";
import { ReactComponent as WorkIcon } from "../../work.svg";
import { ReactComponent as SchoolIcon } from "../../school.svg";
import timelineElements from "../../timelineEvents";
import EYImage from '../../EY.png';
import UBImage from '../../UB.png';
import SRMImage from '../../SRM.png';
import NarayanaImage from '../../Narayana.png';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education from "./education.css"

function Education() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title" id="timeline">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let isUb = element.id === 1;
            let isEy = element.id === 2; 
            let isSrm = element.id === 3; 
            let isNarayana = element.id === 4 || element.id === 5;
            let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

    return (
        <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
        >
            <div style={{display:"flex", alignItems: "center" }}>
                <div style={{ width: "50px", height: "50px", overflow: "hidden", marginRight: "10px" }}>
                    {isUb ? <img src={UBImage} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                    {isEy && <img src={EYImage} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {isSrm && <img src={SRMImage} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {isNarayana ? <img src={NarayanaImage} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                </div>
                <div>
                    <h3 style={{color: "black"}}>
                        {element.title}
                    </h3>
                    <div>
                        <h5 style={{color: "black"}}>
                            {element.date}
                        </h5>
                        <h5 style={{color: "black"}}>
                            {element.location}
                        </h5>
                    </div>
                </div>
            </div>
            <p id="description" className="description">{element.description}</p>
            {showButton && (
                <a
                    className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                >
                    {element.buttonText}
                </a>
            )}
        </VerticalTimelineElement>
        );
    })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
