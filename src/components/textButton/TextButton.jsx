import React from "react";
import "./textButton.css";

export const TextButton = ({ text, destinyRef, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (destinyRef.current) {
      destinyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={`textbutton ${className}`}
      href={`#${destinyRef.current?.id}`}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};
