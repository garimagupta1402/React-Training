import React, {useContext} from "react";
import ThemeContext from './context'
import { UPDATE_TO_LIGHT, UPDATE_TO_DARK } from "./actionNames"

export const Main = (props) => {
  const [themeState, dispatch] = useContext(ThemeContext);

  return (
    <div>
      <h1 style={themeState?.dark} >Main</h1>
      <button onClick={() => dispatch({ type: UPDATE_TO_LIGHT, payload: "1px solid white" })}>
        Change to Light
      </button>
      <button onClick={() => dispatch({ type: UPDATE_TO_DARK, payload: "1px solid black" })}>
        Change to Dark
      </button>
    </div>
  );
};
