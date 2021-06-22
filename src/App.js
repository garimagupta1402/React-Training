import React from "react";
import Dashboard from "./modules/Assignment9/dashboard";
import Product from "./modules/Assignment9/product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/product" component={Product} exact/>
           
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
