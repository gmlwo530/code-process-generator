import React from "react";

import "codemirror/mode/go/go.js";
import "codemirror/mode/javascript/javascript.js";
import { Controlled as CodeMirror } from "react-codemirror2";

import { useMainContext, isUpdating } from "context/MainContext";

import "./style.scss";

const editorOptions = {
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
      value={
        isUpdating(state.frames.length, state.cursor)
          ? state.updatedCode
          : state.code
      }
      options={editorOptions}
      onBeforeChange={(editor, data, value) => {
        dispatch({ type: "update-code", payload: value });
      }}
      onChange={(_, __, value) => {}}
      autoScroll={true}
    />
  );
};

export default MyCodeMirror;
