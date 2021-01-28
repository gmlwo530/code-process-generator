import React from "react";
import ReactDOM from "react-dom";
import "./components/_settings/base.scss";
import App from "./components/App";

(window as { [key: string]: any })[
  `ga-disable-${process.env.REACT_APP_GA_ID}`
] = process.env.REACT_APP_MODE !== "prod";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
