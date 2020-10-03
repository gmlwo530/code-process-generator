import React, { useReducer } from "react";
import { getDefaultFrame } from "data";
import {
  MainContext,
  MainContextState,
  MainContextAction,
} from "./MainContext";

const MainProvider = ({ children = <></> }) => {
  let defaultFrame = getDefaultFrame();
  let initState: MainContextState = {
    frames: [],
    cursor: 0,
    code: defaultFrame.code,
    description: defaultFrame.description,
  };

  let reducer = (state: MainContextState, action: MainContextAction) => {
    switch (action.type) {
      case "update-frames":
        return { ...state, frames: action.payload };
      case "update-cursor":
        return { ...state, cursor: action.payload };
      case "update-code":
        return { ...state, code: action.payload };
      case "update-description":
        return { ...state, description: action.payload };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initState);
  let value = { state, dispatch };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
