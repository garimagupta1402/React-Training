import React from "react";
import Rating from "./rating";
import "./index.css";

function Movie(props) {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
      <h2>{props.rating}</h2>
    </div>
  );
}
export default Movie;