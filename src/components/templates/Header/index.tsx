import React from "react";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <header>
      <p id="site-title">Code Process Generator</p>
      <p id="site-description">
        Write your code step by step and generate to markdown
      </p>
    </header>
  );
};

export default Header;
