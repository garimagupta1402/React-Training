import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./nav";
import Product from "./product";
import data from "./data";
import Footer from "./footer"

const styles = makeStyles({
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "5%",
  },
});

const Main = () => {
  const classes = styles();
  return (
    <>  
      <div>
        <Navbar action={"Go Back"} isLogin={false} />
        <div className={classes.box}>
          {data.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                des={product.description}
                price={product.price}
              />
            );
          })}
        </div>
        <Footer/>
      </div>
    </>
  );
};
export default Main;
