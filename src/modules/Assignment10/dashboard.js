import { Button } from "@material-ui/core";
import React from "react";
import Comp from "../Assignment10/comp";
import "./index.css";

function Dashboard(props) {
  return (
    <div>
      <Button variant="contained" color="primary" className={"btn"}>
        {"Add User"}
      </Button>
      <div className={"mainCard"}>
        {props.users.map((current) => (
          <div key={current.id} className={"compDiv"}>
            <Comp
              index={current.id}
              src={current.avatar}
              fname={current.first_name}
              data={props.users}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
