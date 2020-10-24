import React from "react";

import "codemirror/mode/go/go.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { useMainContext } from "context/MainContext";

import "./style.scss";

interface FrameProps {
  index: number;
  code: string;
  isSaved?: boolean;
}

const frameOptions = {
  screenReaderLabel: "Code frame",
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
  readOnly: true,
};

const Frame: React.FC<FrameProps> = ({ index, code, isSaved = true }) => {
  const { state, dispatch } = useMainContext();

  const moveCursor = (index: number) => {
    dispatch({ type: "update-cursor", payload: index });
  };

  return (
    <div
      id={`frame-${index}`}
      className={`frame ${isSaved ? "saved-frame" : "not-saved-frame"} ${
        index === state.cursor && isSaved ? "selected-frame" : null
      }`}
      onClick={() => moveCursor(index)}
    >
      <CodeMirror value={code} options={frameOptions} />
    </div>
  );
};

export default Frame;
