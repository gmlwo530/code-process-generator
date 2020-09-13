import React, { useContext } from "react";

interface MainContextAPI {
  state: MainContextState;
  dispatch: React.Dispatch<MainContextAction>;
}

export type MainContextAction =
  | {
      type: "update-count";
      payload: number;
    }
  | {
      type: "update-frames";
      payload: number;
    }
  | {
      type: "update-cursor";
      payload: number;
    };

export interface MainContextState {
  count: number;
}

export const MainContext = React.createContext<MainContextAPI | undefined>(
  undefined
);

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
};
