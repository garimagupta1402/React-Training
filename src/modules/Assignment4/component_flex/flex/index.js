import React from "react";
import "./index.css";

function Flexcomponent(props) {
  var heading, item1, item2, item3, item4, subText, subdivClass;
  return (
    <div className={props.subdivClass}>
      <h2 className={"headingClass"}>{props.heading}</h2>
      <ui>
        <li><a  href="#">{props.item1}</a></li>
        <li><a href="#">{props.item2}</a></li> 
          <li> <a href="#">{props.item3}</a></li> 
          <li><a href="#">{props.item4}</a></li>
        <li><a href="#">{props.item5}</a></li>
      </ui>
      <h3 className={"subTextClass"}>{props.subText}</h3>
    </div>
  );
}
export default Flexcomponent;
