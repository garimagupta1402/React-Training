import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.js";
import Table from "./table";
import { Grid , makeStyles} from "@material-ui/core";


const useStyles= makeStyles({
    tableGrid:{
      textAlign:"end"
    }
})
function Assignment14() {
  const classes= useStyles()
  return (
    <>
      <Header />
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid  item xs={9} className={classes.tableGrid}>
        <Table />
      </Grid>
    </>
  );
}

export default Assignment14;
