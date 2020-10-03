import React from "react";

import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import Main from "components/templates/Main";

import "./style.scss";

const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="pages">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
