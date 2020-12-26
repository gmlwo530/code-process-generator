import React from "react";
import "./style.scss";
import MyCodeMirror from "components/atoms/MyCodeMirror";
import DescriptionEditor from "components/molecules/DescriptionEditor";

const EditorContainer: React.FC = () => {
  return (
    <div id="editor-container">
      <MyCodeMirror />
      <DescriptionEditor />
    </div>
  );
};

export default EditorContainer;
