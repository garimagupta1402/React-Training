import React, { useDebugValue, useState } from "react";
import data from "./data";
import "./index.css";

function Detail(props) {
  var viewData;
  viewData = JSON.parse(localStorage.getItem("datas"));
  const handleChange=() =>{
    
  }

  return (
    
    <div className={"detailDiv"}>
         <form>
        <div>
          <input
            className={"search"}
            type="text"
            field="weight"
            value={value.weight}
            onChange={handleChange}
          />
          <button type="submit" >Change Request</button>
        </div>
      </form>
      <div className={"detailText"}>
      <h2>{viewData.name}</h2>
      <h4>{viewData.miles_per_gallon}</h4>
      <h4>{viewData.cylinders}</h4>
      <h4>{viewData.displacement}</h4>
      <h4>{viewData.horsepower}</h4>
      <h4>{viewData.weight_in_lbs}</h4>
      <h4>{viewData.acceleration}</h4>
      <h4>{viewData.year}</h4>
      <h4>{viewData.origin}</h4>
      </div>
   
    </div>
  );
}
export default Detail;
