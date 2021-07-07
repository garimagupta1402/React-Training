import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Link,
  Typography,
} from "@material-ui/core";

const styles = makeStyles({
  footer: {
    width:"100%",
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"#FF8E53"
  }
});
function Footer() {
  const classes = styles();
  return (
    <div>
      <AppBar
        position="relative"
      
        style={{ position: "fixed", bottom: "0" }}
      >
        <Toolbar className={classes.footer}>
          <Typography>
            Contact us on 989999989 or drop a Mail on{" "}
            <Link>(garima.gupta@appinventiv.com)</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footer;
