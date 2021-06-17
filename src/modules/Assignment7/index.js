import React, { useState } from "react";
import Comp from "./comp";
import Detail from "./Detail.js";
import data from "./data";
import "./index.css";

function Main() {
  const [isForm, setForm] = useState(true);
  const [isDetail, setDetail] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const checkSubmit = (event) => {
    setForm(false);
    setDetail(true);
  };

  return (
    <>
      {isForm && (
        <div className={"mainDiv"}>
          <p>
            1)Chevrolet chevelle malibu 2)Buick skylark 320 3)Buick skylark 320
            4)Plymouth satellite 5)Amc rebel sst 6)Ford torino
          </p>
          <p>
            {" "}
            7)Ford galaxie 500 8)Chevrolet impala 9)Plymouth fury iii 10)Pontiac
            catalina 11)Amc ambassador dpl
          </p>
          <input
            className={"search"}
            type="text"
            placeholder={"Search..."}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit" onClick={checkSubmit}>
            View Details
          </button>
          <div className={"compDiv"}>
            {data.cars
              .filter((value) => {
                if (searchTerm == "") {
                  return "";
                } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  var datas = JSON.stringify(value);
                  localStorage.setItem("datas", datas);
                }
              })

              .map((value, name) => {
                return (
                  <div key={name}>
                    <Comp
                      name={value.name}
                      miles_per_gallon={value.miles_per_gallon}
                      cylinders={value.cylinders}
                      displacement={value.displacement}
                      horsepower={value.horsepower}
                      weight={value.weight_in_lbs}
                      accelaration={value.acceleration}
                      year={value.year}
                      origin={value.origin}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {isDetail && <Detail />}
    </>
  );
}
export default Main;
