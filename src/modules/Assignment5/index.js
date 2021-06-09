import React, { useState } from "react";
import { Button, makeStyles, Drawer } from "@material-ui/core";

const styles = makeStyles({
  maincontainer: {
    position: "relative",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "800px",
  },
});

export default function Material() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.maincontainer}>
      <div className={classes.container}>
        <Button variant="contained">Open</Button>
        <Drawer open={open}>Menu</Drawer>
      </div>
    </div>
  );
}
