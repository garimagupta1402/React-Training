import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

function Form() {
const history= useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token="123123abcfrdt";
    localStorage.setItem("token", JSON.stringify(token));
   history.push("/dashboard")
  };

  return (
    <div className={"form"}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Name" required />
        <input type="email" placeholder="Enter your email" required/>
        <input type="text" placeholder="Enter your Username" required/>
        <input type="password" placeholder="Enter your Password" required />
        <button type="submit">Login </button>
      </form>
    </div>
  );
}
export default Form;