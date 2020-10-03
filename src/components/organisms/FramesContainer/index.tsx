import React from "react";
import "./style.scss";

import SavedFrame from "components/molecules/SavedFrame";
import NotSavedFrame from "components/molecules/NotSavedFrame";
import { useMainContext } from "context/MainContext";

const FramesContainer: React.FC = () => {
  const { state } = useMainContext();

  return (
    <div id="frame-container">
      {state.frames.map((item, index) => {
        return <SavedFrame key={index} index={index} code={item.code} />;
      })}
      <NotSavedFrame index={state.frames.length} code={state.code} />
    </div>
  );
};

export default FramesContainer;
