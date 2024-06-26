// region Imports
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

import gmailSvg from "./assets/contact/gmail.svg";
import linkedinSvg from "./assets/contact/linkedin.svg";
import githubSvg from "./assets/contact/github.svg";

import chordokuImg from "./assets/projects/chordoku.png";
import ordererImg from "./assets/projects/orderer_pairs.png";

import { TechCards } from "./components/techCards/TechCards";
import { Project } from "./components/project/project";
//endregion

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        skillRef={skillsRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
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
        // region Skills
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
      {
        // endregion
        // region Projects
      }
      <div className="projects" ref={projectsRef}>
        <h2 className="projects-title">Proyectos</h2>
        <div className="projects-container">
          <Project
            projectName="Chordoku"
            imgSrc={chordokuImg}
            link="https://www.chordoku.com.ar/"
            techs={["React", "JavaScript", "Html", "Css"]}
          />
          <Project
            projectName="API Calculadora Pares"
            imgSrc={ordererImg}
            link="https://federicodeniard.github.io/front-orderer-pairs/"
            techs={["Python", "Flask", "React", "JavaScript", "Html", "Css"]}
          />
        </div>
      </div>
      <div className="contact" ref={contactRef}>
        <h2 className="contact-title">Contacto</h2>
        <div className="contact-container">
          <TechCards
            imgSrc={linkedinSvg}
            language="LinkedIn"
            link="https://www.linkedin.com/in/federicodeniard/"
          />
          <TechCards
            imgSrc={gmailSvg}
            language="Gmail"
            link="mailto:fededeniard@gmail.com"
          />
          <TechCards
            imgSrc={githubSvg}
            language="Github"
            link="https://github.com/FedericoDeniard"
          />
        </div>
      </div>
    </>
  );
}

export default App;
