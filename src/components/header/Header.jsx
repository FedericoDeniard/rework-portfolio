import "./header.css";
import { TextButton } from "../textButton/TextButton";
import menu from "../../assets/menu.svg";
import { useState } from "react";

export const Header = ({ skillRef, homeRef }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header className="header">
        <h4 className="header-title">Federico Deniard</h4>
        <div className="header-info">
          <TextButton text="Inicio" destinyRef={homeRef} />
          <TextButton text="Proyectos" destinyRef={""} />
          <TextButton text="Habilidades" destinyRef={skillRef} />
          <TextButton text="Contacto" destinyRef={""} />
        </div>
        <div className="header-info_mobile">
          <img
            src={menu}
            onClick={() => setMenuOpened(!menuOpened)}
            className="header-info_mobile-button"
          ></img>
          <div
            className={`header-info_mobile-menu ${menuOpened ? "opened" : ""}`}
          >
            <TextButton
              className="header-info_mobile-menu_option"
              text="Inicio"
              destinyRef={homeRef}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Proyectos"
              destinyRef={""}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Habilidades"
              destinyRef={skillRef}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Contacto"
              destinyRef={""}
            />
          </div>
        </div>
      </header>
    </>
  );
};
