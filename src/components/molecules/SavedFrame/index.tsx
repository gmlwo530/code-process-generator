import React, { useState } from "react";
import DeleteFrameButton from "components/atoms/DeleteFrameButon";
import Frame from "components/atoms/Frame";
import "./style.scss";
import { useMainContext } from "context/MainContext";

interface SavedFrameProps {
  index: number;
  code: string;
}

const SavedFrame: React.FC<SavedFrameProps> = ({ index, code }) => {
  const { dispatch } = useMainContext();
  const [deleteButtonOpen, setDeleteButtonOpen] = useState(false);

  const removeFrame = (e: React.MouseEvent) => {
    // if (window.confirm("Are you sure you want to delete")) {
    e.stopPropagation();
    console.log("Delete!");
    dispatch({ type: "delete-frame", payload: index });
    // }
  };

  return (
    <div
      className="saved-frame-layout"
      onMouseEnter={() => {
        setDeleteButtonOpen(true);
      }}
      onMouseLeave={() => {
        setDeleteButtonOpen(false);
      }}
    >
      <Frame index={index} code={code} />
      {deleteButtonOpen ? <DeleteFrameButton onClick={removeFrame} /> : null}
    </div>
  );
};

export default SavedFrame;
