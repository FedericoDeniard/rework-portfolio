import { useEffect, useState } from "react";
import "./techCards.css";

export const TechCards = ({ imgSrc, language }) => {
  const [techImgOver, setTechImgOver] = useState(false);

  return (
    <>
      <div className="techCard">
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
      </div>
    </>
  );
};
