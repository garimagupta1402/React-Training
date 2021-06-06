import React, { Component } from "react";
import "./index.css";
import logo from "../../assets/images/logo.svg";
import bitcoin from "../../assets/images/bitcoin.png";
import usa from "../../assets/images/usa.svg";
import Cards from "./cards";
import Title from "./title";
import tick from "../../assets/images/tick.svg";
import timer from "../../assets/images/timer.svg";
import wallet from "../../assets/images/wallet.svg";
import noun_tick from "./../../assets/images/noun_tick.png";
import noun_timer from "./../../assets/images/noun_timer.png";
import noun_Wallet from "./../../assets/images/noun_Wallet.png";
import man from "./../../assets/images/man.jpg";
import Dogecoin from "./dogecoin";
import lock from "./../../assets/images/lock.svg";
import msg from "./../../assets/images/msg.svg";
import lady from "./../../assets/images/lady.jpg";
import WhatIsDogecoin from "./whatisdogecoin";
import Spendingdogecoin from "./../Asignment3/spendingDogecoin";
import clothing from "./../../assets/images/clothing.svg";
import hosting from "./../../assets/images/hosting.png";
import casino from "./../../assets/images/casino.png";
import nounTick from "./../../assets/images/nounTick.svg";
import connection from "./../../assets/images/connection.svg";
import people from "./../../assets/images/people.png";
import review from "./../../assets/images/review.png";
// import CreditCards from "./creditCards";
import master from "../../assets/images/master.png";
import visa from "../../assets/images/visa.png";

function main(props) {
  return (
    <div className="container">
      <div className={"nav"}>
        <img src={logo} />
        <ui>
          <li>BUY BIOCOIN</li>
          <li>SELL BITCOIN</li>
          <li>BLOG</li>
          <li>ABOUT US</li>
        </ui>
        <select value={"Eng"}>
          <option> EN</option>
          <option>ES</option>
        </select>
        <button className={"login"} type={"button"}>
          LOGIN
        </button>
        <button className={"signup"} type={"button"}>
          SIGN UP
        </button>
      </div>
      <div className={"header"}>
        <div className={"text"}>
          <h1>Buy & Sell Dogecoin Online</h1>
          <h2> Add Doge to your crypto wallet</h2>
          <p>
            Instant fun, and free from the traditional banking system. Buy
            Dogecoin with your debit or credit card today.
          </p>
        </div>
        <div className={"card"}>
          <h3>Get your crypto now!</h3>
          <button className={"buy"}>BUY</button>
          <button className={"sell"}>SELL</button>
          <img className={"inputImg"} src={usa} />
          <input type={"number"}></input>
          <select value={"USD"}>
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
            <option>AUD</option>
            <option>CAD</option>
          </select>
          <hr />
          <img className={"inputImg"} src={bitcoin} />
          <input type={"number"}></input>
          <select value={"XRP"}>
            <option>BTH</option>
            <option>ETH</option>
            <option>LTC</option>
            <option>XRP</option>
            <option>BCH</option>
            <option>DOGE</option>
          </select>
          <button className={"buydoge"} type={"submit"}>
            BUY DOGE
          </button>
        </div>
      </div>
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
      <div className={"howtobuydogecoin"}>
        <Title
          heading={"How to Buy Dogecoin"}
          subheading={"Only 3 simple steps"}
        />
        <div className="internalDiv">
          <div>
            <Cards
              image={tick}
              count={1}
              btnColor={"#009cde"}
              heading={"Get verified quickly"}
              des={
                "Just sign up, upload your verification documents and open your account."
              }
            />
          </div>
          <div>
            <Cards
              image={wallet}
              count={2}
              btnColor={"#009cde"}
              heading={"Buy Dogecoin"}
              des={
                "Select which coins you would like to buy and how much you want to purchase."
              }
            />
          </div>
          <div>
            <Cards
              image={timer}
              count={3}
              btnColor={"#009cde"}
              heading={"Receive Dogecoin"}
              des={
                "We will send your coins to your wallet within 15 minutes of payment approval."
              }
            />
          </div>
        </div>
        <button className={"howtobuydoge"} type={"submit"}>
          BUY DOGECOIN
        </button>
      </div>
      <div className={"howtobuydogecoin"}>
        <Title
          heading={"How to Sell Dogecoin"}
          subheading={"Only 3 simple steps"}
        />
        <div className="internalDiv">
          <div>
            <Cards
              image={noun_tick}
              count={1}
              btnColor={"#86c306"}
              heading={"Get verified quickly"}
              des={
                "Just sign up, upload your verification documents and open your account."
              }
            />
          </div>
          <div>
            <Cards
              image={noun_Wallet}
              count={2}
              btnColor={"#86c306"}
              heading={"Buy Dogecoin"}
              des={
                "Select which coins you would like to sell and how much you want to sell."
              }
            />
          </div>
          <div>
            <Cards
              image={noun_timer}
              count={3}
              btnColor={"#86c306"}
              heading={"Receive Dogecoin"}
              des={
                "We will send your coins to your wallet within 15 minutes of payment approval."
              }
            />
          </div>
        </div>
        <button className={"howtoselldoge"} type={"submit"}>
          Sell DOGECOIN
        </button>
      </div>
      <div className={"pictureandText"}>
        <Dogecoin
          image={man}
          heading={"Why Buy & Sell Dogecoin with Xcoin?"}
          iconImg={lock}
          subHeading={"Encryption Technology"}
          des={
            "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
          }
          iconimg={msg}
          subheading={"Customer Care"}
          desdiv={
            "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team"
          }
          buttonText={"Buy & sell Dogecoin today"}
          btn={"SIGN UP"}
        />
      </div>
      <div className={"whatIsDogecoin"}>
        <div>
          <WhatIsDogecoin
            img={connection}
            icon={nounTick}
            iconText={"Decentralized"}
          />
        </div>
        <div className={"text_whatisdogecoin"}>
          <h2>What is Dogecoin?</h2>
          <p>
            Dogecoin (Doge) is a cryptocurrency created by software engineers in
            2013. It’s been stated that it was created jokingly as a homage to
            Bitcoin, but with recent price surges, it’s becoming a much more
            serious investment for crypto-enthusiasts.{" "}
          </p>
        </div>
        <div>
          <WhatIsDogecoin
            img={people}
            icon={nounTick}
            iconText={"Peer-to-peer"}
          />
        </div>
      </div>
      <div className={"wherecanispendmydogecoin"}>
        <div className={"textSpendingDogecoin"}>
          <h2>Where Can I Spend my Dogecoin?</h2>
          <p>
            There are a variety of fashion and clothing shops online accepting
            Doge as payment. You can also use your Doge to pay for domains and
            hosting, or online casinos.
          </p>
        </div>
        <div className={"spendingDogeCoin"}>
          <div>
            <Spendingdogecoin pic={clothing} picText={"CLOTHING STORES"} />
          </div>
          <div>
            <Spendingdogecoin pic={hosting} picText={"DOMAINS & HOSTING"} />
          </div>
          <div>
            <Spendingdogecoin pic={casino} picText={"ONLINE CASINO"} />
          </div>
        </div>
      </div>
      <div className={"pictureandText"}>
        <Dogecoin
          image={lady}
          heading={"Is Doge coin for me?"}
          marg={"100px 0px 0px 0px"}
          iconImg={""}
          des={
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "
          }
          iconimg={""}
          buttonText={"Buy & sell Dogecoin today"}
          btn={"SIGN UP"}
        />
      </div>

      <div className={"footer"}>
        <div className={"footerImage"}>
          <img src={logo} />
          <img src={review} />
          <ui className={"footerBottom"}>
            <li>
              <a>Xcoins.com </a>
            </li>
            <li>
              <a> Tearms of Services</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Legal Notice</a>
            </li>
            <li>
              <a>Site Map</a>
            </li>
          </ui>
        </div>
        <div className={"footerBar"}>
          <ui>
            <li className={"footerHeading"}>COMPANY</li>
            <li className={"footerHeading"}>SUPPORT</li>
            <li className={"footerHeading"}>BLOG</li>
          </ui>
          <ui>
            <li>About Us</li>
            <li>Help Centre</li>
            <li>TWITTER</li>
          </ui>
          <ui>
            <li>Career</li>
            <li>Contact</li>
            <li>Facebook</li>
          </ui>
        </div>
      </div>
    </div>
  );
}
export default main;
