import React from "react";

const Experience = ({ timeline, position, work, overview }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-inner">
        <i className="bi bi-briefcase"></i>
        <span>{timeline}</span>
        <h3>{position}</h3>
        <h4>{work}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Experience;
