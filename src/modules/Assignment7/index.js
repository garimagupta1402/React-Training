import React, { useState } from "react";
import Comp from "./comp";
import Detail from "./Detail";
import $data from "./data";

function Main() {
  const [isForm, setForm] = useState(true);
  const [isDetail, setDetail] = useState(true);

  const checkSubmit = (event) => {
    setForm(false);
    setDetail(true);
  };

  return (
    <>
      {isForm && (
        <div className={"mainDiv"}>
          <input type="text" placeholder={"Search..."} />
          <button type="submit" onClick={checkSubmit}>
            View Details
          </button>
          <div className={"compDiv"}>
            {$data.map((value, key) => {
              return (
                <>
                  <Comp
                    name={props.name}
                    miles_per_gallon={props.miles_per_gallon}
                    cylinders={props.cylinders}
                    displacement={props.displacement}
                    horsepower={props.horsepower}
                    weight={props.weight_in_lbs}
                    accelaration={props.acceleration}
                    year={props.year}
                    origin={props.origin}
                  />
                </>
              );
            })}
          </div>
        </div>
      )}
      {isDetail && <Comp />}
    </>
  );
}
export default Main;
