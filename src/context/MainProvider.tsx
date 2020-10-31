import React, { useReducer } from "react";
import { getDefaultFrame } from "data";
import {
  MainContext,
  MainContextState,
  MainContextAction,
  isUpdating,
} from "./MainContext";

let defaultFrame = getDefaultFrame();

let initState: MainContextState = {
  frames: [],
  cursor: 0,
  code: defaultFrame.code,
  description: defaultFrame.description,
  updatedCode: "",
};

const reducer = (state: MainContextState, action: MainContextAction) => {
  switch (action.type) {
    case "update-frames":
      return { ...state, frames: action.payload };
    case "update-cursor":
      if (isUpdating(state.frames.length, action.payload)) {
        return {
          ...state,
          updatedCode: state.frames[action.payload].code,
          cursor: action.payload,
        };
      } else {
        return { ...state, updatedCode: "", cursor: action.payload };
      }
    case "update-code":
      if (isUpdating(state.frames.length, state.cursor)) {
        return { ...state, updatedCode: action.payload };
      } else {
        return { ...state, code: action.payload };
      }
    case "update-description":
      return { ...state, description: action.payload };
    case "delete-frame":
      let newFrames = state.frames;
      newFrames.splice(action.payload, 1);

      let newCursor =
        action.payload === state.cursor
          ? newFrames.length
          : action.payload < state.cursor
          ? state.cursor - 1
          : state.cursor;
      return { ...state, frames: newFrames, cursor: newCursor };
    default:
      return state;
  }
};

const MainProvider = ({ children = <></> }) => {
  let [state, dispatch] = useReducer(reducer, initState);
  let value = { state, dispatch };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
