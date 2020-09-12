import React from "react";
import "./style.scss";
import CodeEditor from "components/molecules/CodeEditor";
import DescriptionEditor from "components/molecules/DescriptionEditor";

const EditorContainer: React.FC = () => {
  return (
    <div id="editor-container">
      <CodeEditor />
      <DescriptionEditor />
    </div>
  );
};

export default EditorContainer;
