import React, { useState } from "react";
import MovieHomePage from "./movieHomePage";
import "./index.css";

function Login() {
  const [login, setLogin] = useState(true);
  const [movie, setMovie] = useState(false);

  const checkValidate = () => {
    setLogin(false);
    setMovie(true);
  };

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleformsubmit = (event) => {
    event.preventDefault();
    // validation();
    setError(validation(value));
    var object = {
      email: value.email,
      password: value.password,
  };
  // alert(retrievedObject.email);
  };
  const validation = (value) => {
    let errors = {};
    var retrievedObject = localStorage.getItem("object");
    var obj = JSON.parse(retrievedObject);

    if (value.email !== obj.email) {
      errors.email = "Email does not match!";
    }
    if (value.password !== obj.password) {
      errors.password = "Password does not match!";
    }
    else{
      
      checkValidate();
    }
    return errors;
  };
  return (
    <>
      {login && (
        <div className={"form"}>
          <form>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={value.email}
                onChange={handleChange}
              />

              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={value.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit" onClick={handleformsubmit}>
              Login
            </button>
          </form>
        </div>
      )}
      {movie && <MovieHomePage />}
    </>
  );
}
export default Login;
