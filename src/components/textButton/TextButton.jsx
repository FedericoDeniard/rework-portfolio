import "./textButton.css";

export const TextButton = ({ text, destiny }) => {
  return (
    <>
      <a className="textbutton" href={destiny}>
        {text}
      </a>
    </>
  );
};
