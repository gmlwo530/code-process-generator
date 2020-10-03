import React from "react";
import "./style.scss";

import MainProvider from "context/MainProvider";

import FramesContainer from "components/organisms/FramesContainer";
import ToolContainer from "components/organisms/ToolContainer";
import EditorContainer from "components/organisms/EditorContainer";

const Main: React.FC = () => {
  return (
    <MainProvider>
      <main>
        <EditorContainer />
        <ToolContainer />
        <FramesContainer />
      </main>
    </MainProvider>
  );
};

export default Main;
