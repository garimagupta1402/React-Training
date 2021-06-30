import { UPDATE_TO_LIGHT, UPDATE_TO_DARK } from "./actionNames"
import { initialState } from "./store";


export const ThemeReducer = (state, action) => {
  const{type, payload} = action;
  switch (type) {
    case UPDATE_TO_DARK: {
      return {
        ...state,
        dark: { ...initialState.dark, border: payload },
      };
    }
    case UPDATE_TO_LIGHT: {
      return {
        ...state,
        light: { ...initialState.light, border: payload },
      };
    }
    default: {
      return state;
    }
  }
};
