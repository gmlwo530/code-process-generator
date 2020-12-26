import React from "react";
import "./style.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <p id="copyright">
        &copy; 2020{" "}
        <a href="https://github.com/gmlwo530" target="blank">
          gmlwo530
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/gmlwo530/code-process-generator"
          target="blank"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
