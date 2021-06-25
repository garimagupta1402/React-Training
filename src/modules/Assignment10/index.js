import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Form from "./form";
import Dashboard from "./dashboard";
import Description from "./des";
import "./index.css";

function Main() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users/");
      console.log(res.data);
      localStorage.setItem("User", JSON.stringify(res.data.data));
      setUsers(res.data.data);
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Form />
        </Route>
        <Route path={"/dashboard"} exact>
          <Dashboard users={users} setUsers={setUsers} />
        </Route>
        <Route path={"/des/:Id"} exact>
          <Description users={users} setUsers={setUsers} />
        </Route>
      </Switch>
    </Router>
  );
}
export default Main;
