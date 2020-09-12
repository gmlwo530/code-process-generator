import React from "react";

import "codemirror/mode/go/go.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "./style.scss";

const options = {
  screenReaderLabel: "Code editor",
  lineNumbers: true,
  firstLineNumber: 1,
  mode: "javascript",
  theme: "material",
  scrollBarStyle: null,
  viewportMargin: Infinity,
  lineWrapping: true,
  smartIndent: true,
  extraKeys: {
    "Shift-Tab": "indentLess",
  },
  readOnly: false,
};

const MyCodeMirror: React.FC = () => {
  return (
    <CodeMirror
      value={"console.log(20)"}
      options={options}
      // onBeforeChange={(editor, data, value) => {}}
      onChange={(editor, data, value) => {}}
    />
  );
};

export default MyCodeMirror;
