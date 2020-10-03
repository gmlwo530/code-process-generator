import React from "react";
import "./style.scss";

import SelectLayout from "components/molecules/SelectLayout";
import ButtonLayout from "components/molecules/ButtonLayout";

const ToolContainer: React.FC = () => {
  return (
    <div id="tool-container">
      <SelectLayout />
      <ButtonLayout />
    </div>
  );
};

export default ToolContainer;
