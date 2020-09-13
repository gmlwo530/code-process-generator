import React from "react";
import "./style.scss";

import MainProvider from "context/MainProvider";

import FramesContainer from "components/organisms/FramesContainer";
import ButtonsContainer from "components/organisms/ButtonsContainer";
import EditorContainer from "components/organisms/EditorContainer";

const Main: React.FC = () => {
  return (
    <MainProvider>
      <main>
        <EditorContainer />
        <ButtonsContainer />
        <FramesContainer />
      </main>
    </MainProvider>
  );
};

export default Main;
