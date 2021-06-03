import React, { Component } from "react";
import "./index.css";
import icon from "../../assets/images/icon.png";

class Assignment1 extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"section"}>
          <div className={"row"}>
            <div className={"col-3"}>
              <div className={"sectionblue"}>
                <h2 id={"saveYour"}>Save your</h2>
                <h2 id={"moneyNow"}>money now.</h2>
                <p id={"textPre"}>
                  Manage your company Bot in few easy steps, join our plan to
                  try a 360 experience of our service.
                </p>
                <p id={"textPre"}>
                  Start your 14 days of free Pro plan, you can always upgrade it
                  or stays with the Lite version for free.
                </p>

                <img src={icon} className={"iconImg"} alt="img" height="40%" />
              </div>
            </div>
            <div className={"col-3"}>
              <h2 id={"h2text"}>Start now</h2>
              <h2 id={"text"}>
                your <span id={"spanText"}>free plan.</span>{" "}
              </h2>
              <div className={"sectiongray"}>
                <p id={"lite"}>Lite</p>
                <p id={"free"}>Free</p>
                <div className={"row"}>
                  <small id={"with"}>with restrictions</small>
                </div>

                <h3 id={"plan"}>Plan includes:</h3>
                <ul id={"list"}>
                  <li>Manage conversations directly from your website.</li>
                  <li>
                     Bot without the Ai service.
                  </li>
                  <li>
                    Achieved chat for 30 days.
                  </li>
                  <li>
                    Free, for always
                  </li>
                </ul>
                <h4 id={"view1"}>View all the features</h4>
                <button type={"button"} id={"btn"}>
                  Start 14 days of free Pro plan
                </button>
              </div>
            </div>
            <div className={"col-3"}>
              <h3 className={"corp"}>Are you a corporate?</h3>
              <a href="#" className={"contact"}>
                Contact Us
              </a>
              <div className={"sectionblue3"}>
                <p id={"pro"}>Pro</p>
                <p id={"paid"}>29$</p>
                <div className={"row"}>
                  <small id={"mon"}>monthly</small>
                </div>

                <h3 id={"all"}>All of the Lite plus:</h3>
                <ul id={"list"}>
                  <li>
                    
                      Bot without the AI that can recognise the user's behavious
                      and can automate the sentences.
                    
                  </li>
                  <li>
                     Unlimited conversional flows.
                  </li>
                  <li>
                    
                      Facebook, Twitter, Instagram and Linkedin integration.
                  </li>
                  <li>
                    Achieved chat without limits.
                  </li>
                </ul>
                <h4 id={"view2"}>View all the features</h4>
                <button type={"button"} id={"btn2"}>
                  Start 14 days of free Pro plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
