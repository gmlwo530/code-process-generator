import React from "react";
import "./style.scss";
import MyCodeMirror from "components/atoms/MyCodeMirror";

const CodeEditor: React.FC = () => {
  return (
    <div id="code-editor">
      <MyCodeMirror />
    </div>
  );
};

export default CodeEditor;
