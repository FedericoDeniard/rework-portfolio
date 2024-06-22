import { useState } from "react";
import "./techCards.css";

export const TechCards = ({ imgSrc, language, link }) => {
  const [techImgOver, setTechImgOver] = useState(false);

  return (
    <>
      <a
        className="techCard"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="techCard-container">
          <div className="techCard-circle"></div>
          <img
            className={`techCard-img ${
              techImgOver ? "techCard-animation" : ""
            }`}
            onMouseOver={() => setTechImgOver(true)}
            onMouseLeave={() => setTechImgOver(false)}
            src={imgSrc}
            alt={`${language} skill`}
          />
        </div>
        <h6 className="techCard-tech">{language}</h6>
      </a>
    </>
  );
};
