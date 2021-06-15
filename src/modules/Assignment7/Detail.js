import React, { useDebugValue, useState } from "react";
import data from "./data";
import "./index.css";

function Detail(props) {
  var viewData;
  viewData = JSON.parse(localStorage.getItem("datas"));
  const [value, setValue]= useState({
    cylin:viewData.cylinders,
  })
  const handleSubmit = (event) => {
    const data= datas.event.target.value;
    setValue({
      ...value,
     
    })
    var dat = JSON.stringify(value);
    localStorage.setItem("datas", dat);
  }
  return (
    <div className={"detailDiv"}>
       <div className={"detailText"}>
        <h2>Name: {viewData.name}</h2>
        <h4>Miles Per Gallon: {viewData.miles_per_gallon}</h4>
        <h4>Cylinders: {viewData.cylinders}</h4>
        <h4>Displacment: {viewData.displacement}</h4>
        <h4>HorsePower: {viewData.horsepower}</h4>
        <h4>Weight in lbs: {viewData.weight_in_lbs}</h4>
        <h4>Accelaration: {viewData.acceleration}</h4>
        <h4>Year: {viewData.year}</h4>
        <h4>Origin: {viewData.origin}</h4>
      </div>
      <form>
        <div>
          <input className={"search"} type="text" name="cyl"  onSubmit={handleSubmit} />
          <button type="submit">Change Request</button>
        </div>
      </form>
     
    </div>
  );
}
export default Detail;
