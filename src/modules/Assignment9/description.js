import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

function Description() {
  const { id } = useParams();

  const selectedData = data.find((data) => data.id === id);
  return (
    <>
      <h3>{selectedData.name}</h3>
      <h3>{selectedData.price}</h3>
      <img>{selectedData.image}</img>
    </>
  );
}
export default Description;
