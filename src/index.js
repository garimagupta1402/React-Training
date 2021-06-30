import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider, initialState } from "./modules/Assignment12/store";
import { ThemeReducer } from "./modules/Assignment12/reducer"; 


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={ThemeReducer}>
      <App />
    </StoreProvider> 
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
