import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import data from "./data";
import Navbar from "./nav";
import Footer from './footer'

const styles = makeStyles({
  head: {
    color: "white",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "auto",
    margin: "25px ",
  },
  media: {
    height: "300px",
    width: "350px",
    marginLeft:"30%"

  },
  action: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    color: "white",
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#b3cccc",
    },
  },
  
});

const Description = () => {
  const classes = styles();
  let { id } = useParams();
  console.log(id, "id");
  const FindProduct = data.find((product) => product.id === id);

  return (
    <div className={classes.cardContainer}>
      <Navbar action={"Go Back"} isLogin={false} />
      <Typography className={classes.head} variant="h2">
        {"Product Details!"}
      </Typography>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={FindProduct.image}
            alt="img"
          />
          <CardContent>
            <Typography variant="h5">{FindProduct.name}</Typography>
            <Typography
              className={classes.details}
              variant="h6"
            >{`Description: ${FindProduct.description}`}</Typography>
            <Typography
              className={classes.details}
              variant="h4"
            >{`Price  : ${FindProduct.price}`}</Typography>
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Description;
