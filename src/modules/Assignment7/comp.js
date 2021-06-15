import React from "react";
import './index.css'

function Comp(props) {
  return (
    <div className={"cars"}>
      <h2>{props.name}</h2>
      <h4>{props.miles_per_gallon}</h4>
      <h4>{props.cylinders}</h4>
      <h4>{props.displacement}</h4>
      <h4>{props.horsepower}</h4>
      <h4>{props.weight_in_lbs}</h4>
      <h4>{props.acceleration}</h4>
      <h4>{props.year}</h4>
      <h4>{props.origin}</h4>
    </div>
  );
}
export default Comp;
