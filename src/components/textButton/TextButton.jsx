import "./textButton.css";

export const TextButton = ({ text, destiny, className }) => {
  return (
    <a className={`textbutton ${className}`} href={destiny}>
      {text}
    </a>
  );
};
