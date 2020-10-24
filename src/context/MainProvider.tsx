import React, { useReducer } from "react";
import { getDefaultFrame } from "data";
import {
  MainContext,
  MainContextState,
  MainContextAction,
  isUpdating,
} from "./MainContext";

const MainProvider = ({ children = <></> }) => {
  let defaultFrame = getDefaultFrame();
  let initState: MainContextState = {
    frames: [],
    cursor: 0,
    code: defaultFrame.code,
    description: defaultFrame.description,
    updatedCode: "",
  };
  console.log("Update Frames");
  let reducer = (state: MainContextState, action: MainContextAction) => {
    switch (action.type) {
      case "update-frames":
        // console.log("Update Frames");
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
        console.log("Update code : ", action.payload);
        if (isUpdating(state.frames.length, state.cursor)) {
          return { ...state, updatedCode: action.payload };
        } else {
          return { ...state, code: action.payload };
        }
      case "update-description":
        return { ...state, description: action.payload };
      case "delete-frame":
        console.log(action.payload);
        let newFrames = state.frames;
        newFrames.splice(action.payload, 1);
        console.log(newFrames);

        let newCursor =
          action.payload === state.cursor
            ? newFrames.length - 1
            : action.payload < state.cursor
            ? state.cursor - 1
            : state.cursor;
        return { ...state, frames: newFrames, cursor: newCursor };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initState);
  let value = { state, dispatch };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
