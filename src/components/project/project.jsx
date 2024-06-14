import { useState } from "react";
import "./project.css";

export const Project = ({ imgSrc, projectName, link }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <a
      href={link}
      target="blank"
      className={`project ${mouseOver ? "active" : ""}`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <div className="project-inner">
        <img src={imgSrc} />
        <h4>{projectName}</h4>
      </div>
    </a>
  );
};
