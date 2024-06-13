import { useState, useRef } from "react";
import { Header } from "./components/header/Header";
import { CircleButton } from "./components/circleButton/CircleButton";
import "./App.css";

import yoImg from "./assets/yo.png";
import pythonSvg from "./assets/techs/python.svg";
import cssSvg from "./assets/techs/css.svg";
import flaskSvg from "./assets/techs/flask.svg";
import htmlSvg from "./assets/techs/html.svg";
import jsSvg from "./assets/techs/javascript.svg";
import reactSvg from "./assets/techs/react.svg";
import gitSvg from "./assets/techs/git.svg";

import { TechCards } from "./components/techCards/TechCards";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <Header skillRef={skillsRef} homeRef={homeRef} />
      {
        // region Home
      }
      <div className="home" ref={homeRef}>
        <div className="home-title">
          <h2 className="home-title_name">Federico Deniard</h2>
          <h4 className="home-title_dev">Fullstack Developer</h4>
          <p className="home-title_description">
            Hola! Soy Federico Deniard, estudiante de programación y
            desarrollador fullstack con stack en Python y JavaScript.
          </p>
        </div>
        <CircleButton imgSource={yoImg} />
      </div>
      {
        // endregion
        // region skills
      }
      <div className="skills" ref={skillsRef}>
        <h2>Habilidades</h2>
        <div className="skills-container">
          <TechCards imgSrc={pythonSvg} language="Python" />
          <TechCards imgSrc={jsSvg} language="JavaScript" />
          <TechCards imgSrc={reactSvg} language="React" />
          <TechCards imgSrc={flaskSvg} language="Flask" />
          <TechCards imgSrc={htmlSvg} language="Html" />
          <TechCards imgSrc={cssSvg} language="Css" />
          <TechCards imgSrc={gitSvg} language="Git" />
        </div>
      </div>
    </>
  );
}

export default App;
