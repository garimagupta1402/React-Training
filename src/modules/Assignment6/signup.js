import React, { useState } from "react";

import "./signup.css";

const SignupForm = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  var name;
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const [errors, setError] = useState({});
  const handleformsubmit = (event) => {
    event.preventDefault();
    setError(validation(value));
    var obj = {
      name: value.fullname,
      email: value.email,
      password: value.password,
    };
    localStorage.setItem("object", JSON.stringify(obj));
  };
  const validation = (value) => {
    let errors = {};
  
    if (!value.fullname) {
      errors.fullname = "Name is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } 
    if (value.password) {
      errors.password = "Password is required.";
    }
    return errors;
  };
  return (
    <div className={"form"}>
      <h2>Create Account</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            name="fullname"
            value={value.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>
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
            placeholder="Enter your Password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit" onClick={handleformsubmit}>
          Signup
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
