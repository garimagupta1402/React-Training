import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./nav";
import Footer from "./footer";

const styles = makeStyles({
  picture: {
    width: "100%",
    height: "600px",
  },
});
const Home = () => {
  const classes = styles();
  return (
    <div>
      <Navbar action={"Login"} isLogin={true} />
      <img
        className={classes.picture}
        src={"./images/Assignment14/background.jpg"}
      />
      <Footer />
    </div>
  );
};
export default Home;
