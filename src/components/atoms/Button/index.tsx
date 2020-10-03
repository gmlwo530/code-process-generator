import React from "react";
import "./style.scss";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
