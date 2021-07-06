import React from "react";
import { Grid,  Typography, makeStyles, Tab } from "@material-ui/core";
import Schedule from "./schedule";
import UserInfo from './userinfo'
import GridTop from './Gridtop'

const useStyles = makeStyles({});
function Table() {
  const classes = useStyles();
  return (
    <>
    <div>
        <GridTop/>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.openShift}>
               <div>
                <Typography className={classes.openShiftText}>
                    {"Open Shifts"}
                </Typography>
                </div>
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/man.jpeg"}
            name={"Harry H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/woman.jpeg"}
            name={"Jassie H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/man.jpeg"}
            name={"Harry H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/woman.jpeg"}
            name={"Jassie H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/man.jpeg"}
            name={"Harry H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={2} className={classes.item}>
            <UserInfo
            image={"./images/woman.jpeg"}
            name={"Jassie H."}
            />
            </Grid>
            <Schedule/>
        </Grid>
    </div>
    </>

  );
}
export default Table;