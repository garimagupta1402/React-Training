import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./route";
import Login from "./login";
import Home from "./home";
import Main from "./dashboard";
import Description from "./description";
import Footer from "./footer";

const useStyles = makeStyles({
  mainContainer: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    backgroundSize: "cover",
    height: "100%",
  },
});
const Assignment14 = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/product" component={Main} />
          <PrivateRoute exact path="/product/:id" component={Description} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default Assignment14;
