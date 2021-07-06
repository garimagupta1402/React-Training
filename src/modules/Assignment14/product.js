import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const styles=makeStyles({card: {
  width: "400px",
  margin: "25px ",
  marginBottom:"70px",
},
media: {
  height: "250px",
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
    backgroundColor: "rgba(148,187,233,1)",
  },
},
link: {
  textDecoration: "none",
},});

const Product = (props) => {
  const classes = styles();
  return (
    <div>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent>
            <Typography variant="h6">{props.title}</Typography>
            <Typography variant="p">{`Price : ${props.price}`}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Link to={`/product/${props.id}`} className={classes.link}>
            <Button variant="contained" className={classes.button}>
              {"Full Details"}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default Product;
