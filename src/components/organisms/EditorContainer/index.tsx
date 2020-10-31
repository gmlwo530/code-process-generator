import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import CodeEditor from "components/molecules/CodeEditor";
import DescriptionEditor from "components/molecules/DescriptionEditor";

const EditorContainer: React.FC = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const [editorContainerHeight, setEditorContainerHeight] = useState(0);

  useEffect(() => {
    if (editorContainerRef.current) {
      setEditorContainerHeight(editorContainerRef.current.clientHeight);
    }
  }, []);

  return (
    <div id="editor-container" ref={editorContainerRef}>
      <CodeEditor parentHeight={editorContainerHeight} />
      <DescriptionEditor />
    </div>
  );
};

export default EditorContainer;
