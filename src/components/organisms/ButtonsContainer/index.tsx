import { useMainContext } from "context/MainContext";
import React from "react";
import "./style.scss";

const ButtonsContainer: React.FC = () => {
  const { state, dispatch } = useMainContext();

  const createFrame = () => {
    let codeEditorInput = document.getElementById(
      "code-editor-input"
    ) as HTMLTextAreaElement;

    let descEditorInput = document.getElementById(
      "description-editor-input"
    ) as HTMLTextAreaElement;

    // setCursor(frameList.length + 1);
    // setFrameList([
    //   ...frameList,
    //   {
    //     code: codeEditorInput.value,
    //     description: descEditorInput.value,
    //   },
    // ]);
    dispatch({ type: "update-count", payload: state.count + 1 });
  };

  return (
    <div id="buttons-container">
      <button id="save-code-button" onClick={createFrame}>
        Save
      </button>
      {/* {cursor === frameList.length ? (
            <button id="save-code-button" onClick={createFrame}>
              Save
            </button>
          ) : (
            <button id="update-code-button" onClick={() => updateFrame(cursor)}>
              Update
            </button>
          )} */}
    </div>
  );
};

export default ButtonsContainer;
