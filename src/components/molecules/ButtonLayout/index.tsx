import { useMainContext } from "context/MainContext";
import { Frame } from "data";
import React from "react";
import "./style.scss";

import Button from "components/atoms/Button";

const ButtonLayout: React.FC = () => {
  const { state, dispatch } = useMainContext();
  console.log(state);

  const saveFrame = () => {
    let newFrame: Frame = {
      code: state.code,
      description: state.description,
    };

    dispatch({ type: "update-frames", payload: [...state.frames, newFrame] });
    dispatch({ type: "update-cursor", payload: state.cursor + 1 });
    dispatch({ type: "update-code", payload: "" });
  };

  const updateFrame = () => {
    let currentFrames: Frame[] = state.frames;
    let newFrame: Frame = {
      code: state.updatedCode,
      description: "",
    };

    currentFrames[state.cursor] = newFrame;

    dispatch({ type: "update-frames", payload: [...currentFrames] });
  };

  return (
    <div id="button-layout">
      <Button name="Download" onClick={saveFrame} />
      {state.cursor === state.frames.length ? (
        <Button name="Save" onClick={saveFrame} />
      ) : (
        <Button name="Update" onClick={updateFrame} />
      )}
    </div>
  );
};

export default ButtonLayout;
