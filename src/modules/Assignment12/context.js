import React from 'react'

export const initialState ={
    light: {color: "black", background:"white"},
    dark: {color: "white", background:"black"}
}

export const ThemeContext = React.createContext(initialState);

// import React from "react";

// export const initialState = {
//   light: { color: "black", background: "white" },
//   dark: { color: "white", background: "black" },
//   theme:{color: "black", background: "white"}
// };

// export const ThemeContext = React.createContext(initialState);

// export const useStore = () => React.useContext(ThemeContext);

// export const StoreProvider = ({ children, initialState, reducer }) => {
//   const [themeState, dispatch] = React.useReducer(reducer, initialState);
//   return (
//     <ThemeContext.Provider value={[themeState, dispatch]}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
