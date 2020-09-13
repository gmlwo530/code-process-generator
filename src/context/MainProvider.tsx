import React, { useReducer } from "react";
import {
  MainContext,
  MainContextState,
  MainContextAction,
} from "./MainContext";

const MainProvider = ({ children = <></> }) => {
  let initState: MainContextState = {
    count: 0,
  };

  let reducer = (state: MainContextState, action: MainContextAction) => {
    switch (action.type) {
      case "update-count":
        return { ...state, count: action.payload };
      case "update-frames":
        return { ...state, count: action.payload };
      case "update-cursor":
        return { ...state, count: action.payload };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initState);
  let value = { state, dispatch };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
