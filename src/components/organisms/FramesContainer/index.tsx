import React from "react";
import "./style.scss";

import Frame from "components/molecules/Frame";

const FramesContainer: React.FC = () => {
  return (
    <div id="frames-container">
      {/* {frameList.map((item, index) => {
              return (
                <div
                  className="code-process-item"
                  key={index}
                  onClick={() => moveCursor(index)}
                >
                  {item.code}-{item.description}
                  <button onClick={() => removeFrame(index)}>delete</button>
                </div>
              );
            })} */}
      {[1, 2, 3, 4, 5, 6, 7, 9].map((item, index) => {
        return <Frame key={index} idx={index} />;
      })}
    </div>
  );
};

export default FramesContainer;
