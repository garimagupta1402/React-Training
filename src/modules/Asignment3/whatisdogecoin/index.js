import React from "react";
import './index.css';

function WhatIsDogecoin(props) {
  var img, icon, iconText ;
  return (
    <div className={"card_whatisdogecoin"}>
      <img className={"ImageClass"} src={props.img} />
      <img className={"IconClass"} src={props.icon} />
      <h3 className={"iconTextClass"}>{props.iconText}</h3>
    </div>
  )
}
export default WhatIsDogecoin;