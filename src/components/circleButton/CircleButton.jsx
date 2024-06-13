import { useEffect, useState } from "react";
import "./circleButton.css";

export const CircleButton = ({ imgSource }) => {
  const imageExists = () => {
    return imgSource ? (
      <img src={imgSource} className="circle-button_inner-img"></img>
    ) : (
      ""
    );
  };

  const [isRotating, setIsRotating] = useState(false);

  const rotateClass = () => {
    if (!isRotating) {
      setIsRotating(true);
    }
  };

  useEffect(() => {
    if (isRotating) {
      const timer = setTimeout(() => {
        setIsRotating(false);
      }, 500); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, [isRotating]);

  return (
    <div className="circle-button">
      <div
        className={`circle-button ${isRotating ? "rotate" : ""}`}
        onMouseOver={rotateClass}
      >
        {imageExists()}
      </div>
    </div>
  );
};
