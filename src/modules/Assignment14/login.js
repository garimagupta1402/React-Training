import React, { useEffect, useState } from "react";
import { makeStyles, Button, TextField, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import validate from "./validate";
import Navbar from './nav'

const styles = makeStyles({
  container: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    height: "300px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
  
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    marginTop: "50px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#FE6B8B",
    
  },
});

const userInitial = { Username: "", Email: "", Password: "" };
export default function Login() {
  const classes = styles();
  const [user, setUser] = useState(userInitial);
  const [isError, setIsError] = useState(user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(validate(user));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(isError).length === 0 && isSubmitting) {
      setTimeout(() => {
        localStorage.setItem(
          "accessToken",
          "uigiueudiuebiuwehucrbhuibviubgbiugrir"
        );
        history.push("/product");
      }, 1000);
    }
  }, [isError]);
  const { Username, Email, Password } = user;
  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
     <div className={classes.container}>
 
       <Navbar action={"Go Back"}/>
      {
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              id="input-with-icon-textfield"
              label="Username"
              value={Username}
              name="Username"
              onChange={inputHandle}
              error={Boolean(isError.Username)}
              helperText={isError.Username}
            />
            <br />
            <TextField
              id="input-with-icon-textfield"
              label="Email ID"
              value={Email}
              name="Email"
              onChange={inputHandle}
              error={Boolean(isError.Email)}
              helperText={isError.Email}
            />
            <br />
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              value={Password}
              name="Password"
              onChange={inputHandle}
              error={Boolean(isError.Password)}
              helperText={isError.Password}
            />
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              {"Login"}
            </Button>
          </form>
        </Paper>
      }
    </div>

 
  );
}
