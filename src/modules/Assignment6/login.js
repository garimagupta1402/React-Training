import React, { useState } from "react";

function Login() {
  const [login, setlogin] = useState(false);
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
    // event.preventDefault();
    // setError(validation(login));
    // var obj = {
    //   email: login.email,
    //   password: login.password,
    // };
    var retrievedObject = localStorage.getItem("object");
    // alert(retrievedObject.email);
  };
  // const validation = (login) => {
  //   let errors = {};

  //   if (login.email !== localStorage.getItem(obj.email)) {
  //     errors.email = "Email does not match!";
  //   }
  //   if (login.password !== localStorage.getItem(obj.password)) {
  //     errors.password = "Password does not match!";
  //   }
  //   return errors;
  // };
  return (
    <div>
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
        <button type="submit" onSubmit={handleformsubmit()}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
