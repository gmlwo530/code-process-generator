import React from "react";

import Frame from "components/atoms/Frame";
import "./style.scss";

interface NotSavedFrameProps {
  index: number;
  code: string;
}

const NotSavedFrame: React.FC<NotSavedFrameProps> = ({ index, code }) => {
  return <Frame index={index} code={code} isSaved={false} />;
};

export default NotSavedFrame;
