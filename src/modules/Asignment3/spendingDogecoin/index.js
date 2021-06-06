import React from "react";
import "./index.css";

function Spendingdogecoin(props) {
  var pic, picText;
  return (
    <div>
      <img className={"picClass"} src={props.pic} />
      <p className={"picTextClass"}>{props.picText}</p>
    </div>
  );
}
export default Spendingdogecoin;
