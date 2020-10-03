import React from "react";

import "codemirror/mode/go/go.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { useMainContext } from "context/MainContext";

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
  const { state, dispatch } = useMainContext();

  return (
    <CodeMirror
      value={state.code}
      options={options}
      onChange={(_, __, value) => {
        dispatch({ type: "update-code", payload: value });
      }}
    />
  );
};

export default MyCodeMirror;
