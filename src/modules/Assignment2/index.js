import React, { Component } from "react";
import "./index.css";
import Assgmnt2 from "../Assgmnt2 ";
import appIcon from "../../assets/images/appIcon.svg";
import developerIcon from "../../assets/images/developerIcon.png";
import guidelistIcon from "../../assets/images/guidelistIcon.png";
import storybookIcon from "../../assets/images/storybookIcon.png";

class Assignment2 extends Component {
  columnOdd(imgName, heading, text) {
    return (
      <div className={"itemContainer"}>
        <img className={"imgstyle"} src={imgName} />
        <h3 className={"headingstyle"}>{heading}</h3>
        <p className={"textstyle"}>{text}</p>
      </div>
    );
  }
  render() {
    return (
      <div className={"container"}>
        <div className={"section1"}>
          <h1>9 React Developers Tools </h1>
          <h2>to Create Better Apps Faster.</h2>
        </div>
        <div className={"sectionOdd"}>
          {this.columnOdd(
            developerIcon,
            "1) React Developer Tools",
            " Official Chrome Extension from React Facebook that lets you examine the list of componenets and subcomponents on the webpage."
          )}
        </div>
        <div className={"sectionEven"}>
          <Assgmnt2
            heading={"2) Create React App"}
            text={"Tool used in the process of setting up a React IDE"}
            imgName={appIcon}
          />
        </div>
        <div className={"sectionOdd"}>
          {this.columnOdd(
            storybookIcon,
            "3) Storybook",
            "Online App that lets you create UI Components"
          )}
        </div>
        <div className={"sectionEven"}>
          <Assgmnt2
            heading={"4) React Styleguidist"}
            text={"It offers an interactive way of creating and sharing UI"}
            imgName={appIcon}
          />
        </div>
        <div className={"sectionOdd"}>
          {this.columnOdd(
            developerIcon,
            "5) Bit",
            " CLI tool and online platform that enables you to publish React components"
          )}
        </div>
        <div className={"sectionEven"}>
          <Assgmnt2
            heading={"6) React Bootstrap"}
            text={
              "Powerful toolkit that comprises HTML, CSS and Javascript tools to help you create webpages and applications"
            }
            imgName={appIcon}
          />
        </div>
        <div className={"sectionOdd"}>
          {this.columnOdd(
            developerIcon,
            "7) React Sight",
            " Chrome extension for a visual illustration of all components of your app in a live tree structure."
          )}
        </div>
        <div className={"sectionEven"}>
          <Assgmnt2
            heading={"8) Why did you render"}
            text={
              "It alerts you in the console when an avoidable render occurs"
            }
            imgName={appIcon}
          />
        </div>
        <div className={"footer"}>
          <p>All rights Reserved</p>  
        </div>
      </div>
    );
  }
}

export default Assignment2;
