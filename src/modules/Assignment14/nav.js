import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


const styles = makeStyles({
  addbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  toolbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    display: "flex",
    justifyContent: "flex-end",
    color: "black",
    marginRight: "20px",
  },
  button: {
    color: "white",
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#FE6B8B ",
    "&:hover": {
      backgroundColor: "#b3cccc",
    },
  },
  link: {
    textDecoration: "none",
  },
});

const Navbar = (props) => {
  const classes = styles();
  const history = useHistory();

  const handleClick = () => {
    if (props.isLogin) {
      history.push("/login");
    } else {
      localStorage.removeItem("accessToken");
      history.push("/");
    }
  };
  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            {props.action}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
