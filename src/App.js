import React from 'react';
import Home from './modules/home';


class App extends React.Component{
  render(){
    return(
      <div className={"homeContainer"}>
        <Home/>
      </div>
    );
  }
}
export default App;