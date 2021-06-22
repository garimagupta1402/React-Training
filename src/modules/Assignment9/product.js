import React from "react";
import { useParams } from "react-router";
import data from "./data";
import "./index.css";

function Product1() {
  const { id } = useParams();

  return (
    <>
      {data.map((product) => (
        <div className={"products"}>
          
          <img src={product.image} />
          <div className={"subDiv"}>
          <h3>{product.id}</h3>
          <h3 className={"name"}>{product.name}</h3>
          </div>
          <h2>{product.price}</h2>
     
        </div>
      ))}
    
    </>
  );
}
export default Product1;
