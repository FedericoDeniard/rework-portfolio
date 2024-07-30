import "./header.css";
import { TextButton } from "../textButton/TextButton";
import menu from "../../assets/menu.svg";
import { useState } from "react";

import { useTranslation } from "react-i18next";

export const Header = ({ skillRef, homeRef, projectsRef, contactRef }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mouseOnTitle, setMouseOnTitle] = useState(false);

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="header">
        <h4
          className="header-title"
          onMouseOver={() => setMouseOnTitle(true)}
          onMouseLeave={() => setMouseOnTitle(false)}
        >
          <p className={mouseOnTitle ? "hide" : "show"}>Federico Deniard</p>
          <p className={mouseOnTitle ? "show" : "hide"}>{t("home.dev")}</p>
        </h4>
        <div className="header-info">
          <TextButton text={t("header.home")} destinyRef={homeRef} />
          <TextButton text={t("header.skills")} destinyRef={skillRef} />
          <TextButton text={t("header.projects")} destinyRef={projectsRef} />
          <TextButton text={t("header.contact")} destinyRef={contactRef} />
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
              text="Habilidades"
              destinyRef={skillRef}
            />
            <TextButton
              className="header-info_mobile-menu_option"
              text="Proyectos"
              destinyRef={projectsRef}
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
