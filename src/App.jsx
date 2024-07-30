// region Imports
import { useState, useRef, useEffect } from "react";
import { Header } from "./components/header/Header";
import { CircleButton } from "./components/circleButton/CircleButton";
import "./App.css";

import { useTranslation } from "react-i18next";

import yoImg from "./assets/yo.png";
import pythonSvg from "./assets/techs/python.svg";
import cssSvg from "./assets/techs/css.svg";
import flaskSvg from "./assets/techs/flask.svg";
import htmlSvg from "./assets/techs/html.svg";
import jsSvg from "./assets/techs/javascript.svg";
import reactSvg from "./assets/techs/react.svg";
import gitSvg from "./assets/techs/git.svg";
import typeScriptSvg from "./assets/techs/typescript.svg";
import sqlSvg from "./assets/techs/sql.svg";

import gmailSvg from "./assets/contact/gmail.svg";
import linkedinSvg from "./assets/contact/linkedin.svg";
import githubSvg from "./assets/contact/github.svg";

import chordokuImg from "./assets/projects/chordoku.png";
import ordererImg from "./assets/projects/orderer_pairs.png";
import memoryImg from "./assets/projects/memory_game.png";

import { TechCards } from "./components/techCards/TechCards";
import { Project } from "./components/project/project";
//endregion

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);

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
          <h4 className="home-title_dev">{t("home.dev")}</h4>
          <p className="home-title_description">{t("home.description")}</p>
        </div>
        <CircleButton imgSource={yoImg} />
      </div>
      {
        // endregion
        // region Skills
      }
      <div className="skills" ref={skillsRef}>
        <h2>{t("skills.title")}</h2>
        <div className="skills-container">
          <TechCards imgSrc={pythonSvg} language="Python" />
          <TechCards imgSrc={typeScriptSvg} language="TypeScript" />
          <TechCards imgSrc={jsSvg} language="JavaScript" />
          <TechCards imgSrc={reactSvg} language="React" />
          <TechCards imgSrc={flaskSvg} language="Flask" />
          <TechCards imgSrc={sqlSvg} language="SQL" />
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
        <h2 className="projects-title">{t("projects.title")}</h2>
        <div className="projects-container">
          <Project
            projectName={t("projects.chordoku")}
            imgSrc={chordokuImg}
            link="https://www.chordoku.com.ar/"
            techs={["React", "JavaScript", "Html", "Css"]}
          />
          <Project
            projectName={t("projects.memory_game")}
            imgSrc={memoryImg}
            link={"https://federicodeniard.github.io/memory_game/"}
            techs={[
              "React",
              "TypeScript",
              "Flask",
              "Python",
              "SQL",
              "Html",
              "Css",
            ]}
          />
          <Project
            projectName={t("projects.orderer_pairs")}
            imgSrc={ordererImg}
            link="https://federicodeniard.github.io/front-orderer-pairs/"
            techs={["Python", "Flask", "React", "JavaScript", "Html", "Css"]}
          />
        </div>
      </div>
      <div className="contact" ref={contactRef}>
        <h2 className="contact-title">Contacto</h2>
        <div className="contact-divisions">
          <div className="contact-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            illo, hic explicabo tempora eaque enim similique velit fuga pariatur
            inventore vitae? Ipsa doloremque repellendus quibusdam iusto
            perspiciatis autem itaque ullam.
          </div>
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
      </div>
    </>
  );
}

export default App;
