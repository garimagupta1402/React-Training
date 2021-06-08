import React from "react";
import Flexcomponent from "./flex";
import "./flex.css";

function FlexComponent(props) {
  return (
    <div className={"main"}>
      <div className={"head"}>
        <h1>Support</h1>
        <input placeholder={"Search Xcoins support"}></input>
      </div>
      <div className={"divClass"}>
        <Flexcomponent
          subdivClass={"subdivClass1"}
          heading={"Buy Currency"}
          item1={"What currency do we accept?"}
          item2={"What is the minumum order amount?"}
          item3={"What is the cash Advances fee?"}
          item4={"Ethereum orders and smart contracts"}
          item5={"Ethereum orders and smart contracts"}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass2"}
          heading={"Verification"}
          item1={"ID verification documents submitted"}
          item2={"How should you take the perfect selfie"}
          item3={"What ID can you use to sign up..."}
          item4={"Your Application to join Xcoins was..."}
          item5={"How to make sure your verification..."}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass3"}
          heading={"Order"}
          item1={"Resetting your password?"}
          item2={"What does order complete mean?"}
          item3={"Why has my order failed?"}
          item4={"What does order cancelled mean?"}
          item5={"Why does it take to receive my..."}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass4"}
          heading={"Wallet"}
          item1={"What is my wallet address?"}
          item2={"What is the designation tag and why..."}
          item3={"What are cold wallets?"}
          item4={"What are hot wallets?"}
          item5={"What is a wallet?"}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass5"}
          heading={"Payment methods"}
          item1={"Accepted credit/debit cards"}
          item2={"Overview of bank fees- Cash advance..."}
          item3={""}
          item4={""}
          item5={""}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass6"}
          heading={"Other"}
          item1={"What are our business hours?"}
          item2={"How can I contact Xcoins?"}
          item3={"Why have I not received my email..."}
          item4={"Why can't I access my brand new..."}
          item5={""}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass7"}
          heading={"Security"}
          item1={"How can I protext myself from scams?"}
          item2={"Forgotten your password?"}
          item3={"Create a strong password"}
          item4={""}
          item5={""}
          subText={"See all articles"}
        />

        <Flexcomponent
          subdivClass={"subdivClass8"}
          heading={"Referral program"}
          item1={"How does the Xcoins affiliate program..."}
          item2={""}
          item3={""}
          item4={""}
          item5={""}
          subText={"See all articles"}
        />
        <Flexcomponent
          subdivClass={"subdivClass9"}
          heading={"Affilliate Program"}
          item1={"Are there countries i can't promote in?"}
          item2={"Can you make images specific images/creative for my website?"}
          item3={"How does Xcoin affiliate program work?"}
          item4={""}
          item5={""}
          subText={"See all articles"}
        />
      </div>
    </div>
  );
}
export default FlexComponent;
