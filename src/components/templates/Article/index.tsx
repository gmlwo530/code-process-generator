import React from "react";
import "./style.scss";

import FramesContainer from "components/organisms/FramesContainer";
import ButtonsContainer from "components/organisms/ButtonsContainer";
import EditorContainer from "components/organisms/EditorContainer";

const Article: React.FC = () => {
  return (
    <article>
      <EditorContainer />
      <ButtonsContainer />
      <FramesContainer />
    </article>
  );
};

export default Article;
