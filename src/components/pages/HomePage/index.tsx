import React, { useState } from "react";

import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import Article from "components/templates/Article";

import "./style.scss";

interface Frame {
  code: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [cursor, setCursor] = useState<number>(0);
  const [frameList, setFrameList] = useState<Frame[]>([]);

  const options = {
    screenReaderLabel: "Code editor",
    lineNumbers: true,
    firstLineNumber: 1,
    mode: "javascript",
    theme: "material",
    scrollBarStyle: null,
    viewportMargin: Infinity,
    lineWrapping: true,
    smartIndent: true,
    extraKeys: {
      "Shift-Tab": "indentLess",
    },
    readOnly: false,
  };

  const createFrame = () => {
    let codeEditorInput = document.getElementById(
      "code-editor-input"
    ) as HTMLTextAreaElement;

    let descEditorInput = document.getElementById(
      "description-editor-input"
    ) as HTMLTextAreaElement;

    setCursor(frameList.length + 1);
    setFrameList([
      ...frameList,
      {
        code: codeEditorInput.value,
        description: descEditorInput.value,
      },
    ]);
  };

  const updateFrame = (idx: number) => {
    let codeEditorInput = document.getElementById(
      "code-editor-input"
    ) as HTMLTextAreaElement;

    let descEditorInput = document.getElementById(
      "description-editor-input"
    ) as HTMLTextAreaElement;

    let fl = frameList;
    fl[idx].code = codeEditorInput.value;
    fl[idx].description = descEditorInput.value;
    setCursor(fl.length);
    setFrameList([...fl]);
  };

  const removeFrame = (idx: number) => {
    let fl = frameList;
    fl.splice(idx, 1);

    setCursor(fl.length);
    setFrameList([...fl]);
  };

  const moveCursor = (idx: number) => {
    setCursor(idx);
  };

  return (
    <div id="home-page" className="pages">
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default HomePage;
