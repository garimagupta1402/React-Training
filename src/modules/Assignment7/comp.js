import React from "react";

function Comp(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.miles_per_gallon}</h2>
      <h2>{props.cylinders}</h2>
      <h2>{props.displacement}</h2>
      <h2>{props.horsepower}</h2>
      <h2>{props.weight_in_lbs}</h2>
      <h2>{props.acceleration}</h2>
      <h2>{props.year}</h2>
      <h2>{props.origin}</h2>
    </div>
  );
}
export default Comp;
