import React from "react";
import { useStore } from "./store";
import { UPDATE_TO_LIGHT, UPDATE_TO_DARK } from "./actionNames"

export const Main = (props) => {
  const [themeState, dispatch] = useStore();

  return (
    <div>
      <h1 >Main</h1>
      <button onClick={() => dispatch({ type: UPDATE_TO_LIGHT, payload: "1px solid white" })}>
        Change to Light
      </button>
      <button onClick={() => dispatch({ type: UPDATE_TO_DARK, payload: "1px solid black" })}>
        Change to Dark
      </button>
    </div>
  );
};
