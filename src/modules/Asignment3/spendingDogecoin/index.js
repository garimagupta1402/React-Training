import React from "react";
import "./index.css";

function Spendingdogecoin(props) {
  var pic, picText ,picClass ;
  return (
    <div>
      <img className={props.picClass} src={props.pic} />
      <p className={"picTextClass"} >{props.picText}</p>
    </div>
  );
}
export default Spendingdogecoin;
