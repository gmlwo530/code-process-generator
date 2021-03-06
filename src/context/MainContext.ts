import React, { useContext } from "react";
import { Frame } from "data";

interface MainContextAPI {
  state: MainContextState;
  dispatch: React.Dispatch<MainContextAction>;
}

export type MainContextAction =
  | {
      type: "update-frames";
      payload: Frame[];
    }
  | {
      type: "update-cursor";
      payload: number;
    }
  | {
      type: "update-code";
      payload: string;
    }
  | {
      type: "update-description";
      payload: string;
    }
  | {
      type: "delete-frame";
      payload: number;
    };

export interface MainContextState {
  frames: Frame[];
  cursor: number;
  code: string;
  description: string;
  updatedCode: string;
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

export const isUpdating = (frameLength: number, cursor: number): boolean => {
  return frameLength !== cursor;
};
