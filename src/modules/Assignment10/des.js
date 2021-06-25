import React from "react";
import { useParams } from "react-router-dom";

function Description() {
  const { Id } = useParams();
  const data = JSON.parse(localStorage.getItem("User"));
  console.log(data);
  const selectedData = data[Id - 1];
 
  return (
    <div className={"desDiv"}>
    <img src={selectedData.avatar}/> 
      <h1>{`First Name: ${selectedData.first_name}`}</h1>
      <h2>{`Last Name: ${selectedData.last_name}`}</h2>
      <h2>{`Email: ${selectedData.email}`}</h2>
    </div>
  );
}
export default Description;
