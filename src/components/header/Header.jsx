import "./header.css";
import { TextButton } from "../textButton/TextButton";

export const Header = () => {
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
      </header>
    </>
  );
};
