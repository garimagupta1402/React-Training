import React from "react";
import { useParams, useHistory } from "react-router";
import data from "./data";
import "./index.css";

function Product1() {
  const { id } = useParams();
  const history = useHistory();
  const handleclick = () => {
    history.push(`/description`);
  };

  return (
    <>
      {data.map((product) => (
        <div className={"products"}>
          {/* {console.log(product.id, "prod")} */}
          <img src={product.image} />
          <div className={"subDiv"}>
            <h3>{product.id}</h3>
            <h3 className={"name"}>{product.name}</h3>
          </div>
          <h2>{product.price}</h2>
          {product.id}
          <button onClick={() => handleclick}>Click</button>
        </div>
      ))}
    </>
  );
}
export default Product1;
