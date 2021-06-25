import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorsApi } from "./action";
import {
  makeStyles,
  Box,
  CardContent,
  Typography,
  Grid,
  Card,
} from "@material-ui/core";


const useStyles = makeStyles({
  cardCon: {
    width: "100%",
    margin: "auto",
    backgroundColor: "#458675",
    padding: "5rem",
    height: "100vh",
  },
  cCard: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  bgColor: {
    width: "150px",
    height: "100%",
  },
});

export default function Main() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.colorReducer);

  useEffect(() => {
    dispatch(colorsApi());
  }, []);
  return (
    <Box>
      <Grid className={classes.cardCon} container spacing={8}>
        {color?.map((current, index) => (
          <Grid key={index} item lg={4} xs={12}>
            <Card className={classes.cCard}>
              <Box
                className={classes.bgColor}
                style={{ backgroundColor: current.color }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                >
                  {current.name}
                </Typography>
                <Typography variant="h5" align="center">
                  {current.color}
                </Typography>
                <Typography variant="h5" align="center">
                  {current.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
