import { useMainContext } from "context/MainContext";
import { Frame } from "data";
import React from "react";
import "./style.scss";

import Button from "components/atoms/Button";

const ButtonLayout: React.FC = () => {
  const { state, dispatch } = useMainContext();

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

  const downloadMarkdown = () => {
    let text = "";
    for (let frame of state.frames) {
      text += `\`\`\`javascript
${frame.code}
\`\`\`\n\n`;
    }

    let now = new Date();

    let downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute(
      "href",
      "data:text/markdown;charset=utf-8," + encodeURIComponent(text)
    );
    downloadAnchor.setAttribute(
      "download",
      `code_${now.getFullYear()}${now.getMonth()}${now.getDay()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}.md`
    );

    downloadAnchor.style.display = "none";
    document.body.appendChild(downloadAnchor);

    downloadAnchor.click();

    document.body.removeChild(downloadAnchor);
  };

  return (
    <div id="button-layout">
      <Button name="Download" onClick={downloadMarkdown} />
      {state.cursor === state.frames.length ? (
        <Button name="Save" onClick={saveFrame} />
      ) : (
        <Button name="Update" onClick={updateFrame} />
      )}
    </div>
  );
};

export default ButtonLayout;
