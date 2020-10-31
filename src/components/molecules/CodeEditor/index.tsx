import React from "react";
import "./style.scss";
import MyCodeMirror from "components/atoms/MyCodeMirror";

interface CodeEditorProps {
  parentHeight: number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ parentHeight }) => {
  return (
    <div id="code-editor" style={{ height: `${parentHeight}px` }}>
      <MyCodeMirror />
    </div>
  );
};

export default CodeEditor;
