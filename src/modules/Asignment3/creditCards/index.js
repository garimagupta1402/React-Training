import React from "react";
import "./creditCards.css";
import master from "./../../../assets/images/master.png";
import visa from "./../../../assets/images/visa.png";
function CreditCards() {
  return (
    <div>
      <div className={"cardSmall"}>
        <img className={"imgcreditClass"} src={master} />
        <div className={"cardTextDiv"}>
          <div className={"cardNameDiv"}>
            <h6 className={"cardholder"}>Card Holder</h6>
            <h6 className={"cardholdername"}>George Dux</h6>
          </div>
          <div className={"dateDiv"}>
            <h6 className={"expdate"}>Exp Date</h6>
            <h6 className={"date"}>19/04/2026</h6>
          </div>
        </div>
      </div>
      
      <div className={"cardMed"}>
        <img className={"imgcreditClass2"} src={visa} />
        <div className={"cardTextDiv"}>
          <div className={"cardNameDiv"}>
            <h6 className={"cardholder2"}>Card Holder</h6>
            <h6 className={"cardholdername2"}>John Connor</h6>
          </div>
          <div className={"dateDiv"}>
            <h6 className={"expdate2"}>Exp Date</h6>
            <h6 className={"date2"}>19/04/2026</h6>
          </div>
        </div>
      </div>
      <div className={"TextDiv"}>
        <h2>Exchange your Dogecoin Instantly!</h2>
        <p>
          Buy & sell your Doge using your Visa or Mastercard debit or credit
          card.
        </p>
      </div>
    </div>
  );
}
export default CreditCards;
