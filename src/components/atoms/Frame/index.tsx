import React from "react";

import { useMainContext } from "context/MainContext";
import "./style.scss";

interface FrameProps {
  index: number;
  code: string;
  isSaved?: boolean;
}

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
      {code}
    </div>
  );
};

export default Frame;
