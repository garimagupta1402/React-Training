import React from "react";
import data from "./data";
import './index.css';

function Product1() {
  console.log(data[0], "product1");
  return (
    <>
      {data.map((product) => (
        <div className={"products"}>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
          <img src={product.image} />
        </div>
      ))}
    </>
  );
}
export default Product1;
