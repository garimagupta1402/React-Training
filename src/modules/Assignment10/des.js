import React from "react";
import { useParams } from "react-router-dom";

function Description() {
  const { Id } = useParams();
  const data = JSON.parse(localStorage.getItem("Users"));
//   const selectedData = data[Id - 1];
//   console.log(data);
  return (
    <>
      <h1>Hi User</h1>
    </>
  );
}
export default Description;
