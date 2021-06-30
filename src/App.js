// import React from "react";
// import {Provider} from 'react-redux'
// import Store from './store/store'
// import Main from "./modules/Assignment11";

// class App extends React.Component {
//   render() {
//     return <>
//     <Provider store={Store}>
//       <Main/>
//     </Provider>
//     </>;
//   }
// }
// export default App;
import React from "react";
import { ThemeContext , initialState} from "./modules/Assignment12/context";
import { Main } from "./modules/Assignment12/main";
 
const App = (props) => {
  const { Provider } = ThemeContext;
  return (
    <>
      <Provider value={initialState.dark}>
        <Main />
      </Provider>
    </>
  );
};
export default App;
