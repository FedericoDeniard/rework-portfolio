import { useState } from "react";
import "./project.css";

export const Project = ({ imgSrc, projectName, link, techs }) => {
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
        <div
          className={`project-description_container ${
            mouseOver ? "active" : ""
          }`}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <p className="project-description_title">Tecnologías utilizadas</p>
          <ul className="project-description">
            {techs.map((element, index) => {
              return <li key={index}>- {element}</li>;
            })}
          </ul>

          <p className="project-description"></p>
        </div>
        <h4>{projectName}</h4>
      </div>
    </a>
  );
};
