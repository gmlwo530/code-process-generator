import Frame from "components/atoms/Frame";
import React from "react";
import "./style.scss";

interface SavedFrameProps {
  index: number;
  code: string;
}

const SavedFrame: React.FC<SavedFrameProps> = ({ index, code }) => {
  const removeFrame = (idx: number) => {
    // let fl = frameList;
    // fl.splice(idx, 1);
    // setCursor(fl.length);
    // setFrameList([...fl]);
  };

  return <Frame index={index} code={code} />;
};

export default SavedFrame;
