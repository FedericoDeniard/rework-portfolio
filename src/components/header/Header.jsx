import "./header.css";
import { TextButton } from "../textButton/TextButton";
import menu from "../../assets/menu.svg";
import { useState } from "react";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header className="header">
        <h4 className="header-title">Federico Deniard</h4>
        <div className="header-info">
          <TextButton text="Inicio" destiny={""} />
          <TextButton text="Sobre mí" destiny={""} />
          <TextButton text="Habilidades" destiny={""} />
          <TextButton text="Contacto" destiny={""} />
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
              destiny={""}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Sobre mí"
              destiny={""}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Habilidades"
              destiny={""}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Contacto"
              destiny={""}
            />
          </div>
        </div>
      </header>
    </>
  );
};
