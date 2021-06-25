import React from "react";
import {Link} from "react-router-dom"

import "./index.css";

function Comp(props) {
  return (
    <div className={"usersDiv"}>
        <img src={props.src} />
        <h4>{props.fname}</h4>
        <h4>{props.lname}</h4>
        <h4>{props.email}</h4>
        <button className={"buttonClass"}><Link
        to={{
            pathname:`/des/${props.index}`,
            state:props.data,
        }}>{"Click"}
        </Link> 
        </button>
    </div>
  );
}
export default Comp;
