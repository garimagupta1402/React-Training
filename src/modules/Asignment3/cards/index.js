import React from "react";
import "./index.css";

function Cards(props) {
  var image, heading, des, count, btnColor;
  return (
    <div className={"howtobuy"}>
      <img className={"imgClass"} src={props.image} />
      <div className={"line2"}>
        <div className={"countClass"} style={{ background: props.btnColor }}>{props.count}</div>
        <h5 className={"headingClass"}>{props.heading}</h5>
      </div>
      <h5 className={"desClass"}>{props.des}</h5>
    </div>
  );
}
export default Cards;
