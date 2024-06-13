import { useState } from "react";
import { Header } from "./components/header/Header";
import { CircleButton } from "./components/circleButton/CircleButton";
import "./App.css";

import yoImg from "./assets/yo.png";

function App() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-title">
          <h2 className="home-title_name">Federico Deniard</h2>
          <h4 className="home-title_dev">Fullstack Developer</h4>
        </div>
        <CircleButton imgSource={yoImg} />
      </div>
    </>
  );
}

export default App;
