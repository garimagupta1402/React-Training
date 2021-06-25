import React from "react";
import {Provider} from 'react-redux'
import Store from './store/store' 
import Main from "./modules/Assignment11";

class App extends React.Component {
  render() {
    return <>
    <Provider store={Store}>
      <Main/>
    </Provider>
    </>;
  }
}
export default App;
