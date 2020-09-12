import React from "react";
import "./style.scss";

interface FrameProps {
  idx: number;
}

const Frame: React.FC<FrameProps> = ({ idx }) => {
  return (
    // <div className="frames" key={key} onClick={() => moveCursor(key)}>
    <div className="frames" key={idx}>
      {/* <button onClick={() => removeFrame(index)}>delete</button> */}
    </div>
  );
};

export default Frame;
