import React from "react";

import DeleteIcon from "shared/assets/delete.svg";
import "./style.scss";

interface DeleteFrameButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

const DeleteFrameButton: React.FC<DeleteFrameButtonProps> = ({ onClick }) => {
  return (
    <div className="delete-button" onClick={(e) => onClick(e)}>
      <DeleteIcon />
    </div>
  );
};

export default DeleteFrameButton;
