import React from "react";
import "./index.css";

function Dogecoin(props) {
  var image, iconImg, heading, subHeading,marg, des, buttonText, btn;
  return (
    <div>
      <img className={"imageClass"} src={props.image} />
      <div className={"line"}>
        <h5 className={"headClass"}  style={{ margin: props.marg }}>{props.heading}</h5>
        <img className={"iconImgClass"} src={props.iconImg}/>
        <p className={"subHeadingClass"}>{props.subHeading}</p>
        <h5 className={"desDivClass"}>{props.des}</h5>
        <img className={"iconImgClass"} src={props.iconimg}/>
        <p className={"subHeadingClass"}>{props.subheading}</p>
        <h5 className={"desDivClass"}>{props.desdiv}</h5>
        <div className={"buttons"}>
        <h5 className={"buttonTextClass"}>{props.buttonText}</h5>
        <button className={"btnClass"}>{props.btn}</button>
        </div>
      </div>
    </div>
  );
}
export default Dogecoin;
