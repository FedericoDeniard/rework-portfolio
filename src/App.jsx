import { useState } from "react";
import { Header } from "./components/header/Header";
import { CircleButton } from "./components/circleButton/CircleButton";
import "./App.css";

import yoImg from "./assets/yo.png";

function App() {
  return (
    <>
      <Header />
      {
        // region Home
      }
      <div className="home">
        <div className="home-title">
          <h2 className="home-title_name">Federico Deniard</h2>
          <h4 className="home-title_dev">Fullstack Developer</h4>
          <p className="home-title_description">
            Desarrollador fullstack apasionado y autodidacta, con experiencia en
            proyectos desafiantes como Chordoku. En constante búsqueda de
            conocimiento
          </p>
        </div>
        <CircleButton imgSource={yoImg} />
      </div>
      {
        // endregion
        // region skills
      }
      <div className=""></div>
    </>
  );
}

export default App;
