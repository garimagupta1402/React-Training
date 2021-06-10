import React, { useState } from "react";
import { Button, makeStyles, Drawer } from "@material-ui/core";
import ProfileIcon from "@material-ui/icons/PersonOutlineOutlined";
import PrintIcon from "@material-ui/icons/Fingerprint";
import MemoryIcon from "@material-ui/icons/Memory";
import BuyIcon from "@material-ui/icons/ShoppingCart";
import { TextField } from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = makeStyles({
  maincontainer: {
    position: "relative",
    backgroundColor: "#F4F6F8",
    position: "relative",
  },
  "&.MuiBackdrop-root": {
    backgroundColor: "#ffffff",
  },
  header: {
    width: "96%",
    height: "64px",
    outline: "0",
    position: "inherit",
    paddingLeft: 0,
    backgroundColor: "#ffffff",
  },
  memoryIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "3.5rem",
    },
  },
  Drawer: {
    width: "64px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    borderRight: "0",
    color: "#fafafa !important",
    height: "64px",
    width: "64px",
    backgroundColor: "#373737",
    textalign: "left",
  },
  signUp: {
    position: "absolute",
    right: "120px",
    top: "10px",
    "&.MuiButton-contained": {
      backgroundColor: "#388538",
      color: "#fff",
    },
  },
  SignUp: {
    position: "absolute",
    top: "280px",
    right: "185px",
    "&.MuiButton-contained": {
      backgroundColor: "#388538",
      color: "#fff",
    },
  },
  searchButton: {
    position: "absolute",
    top: "272px",
    left: "5px",
    width: "540px",
    height: "50px",
  },
  logIn: {
    position: "absolute",
    right: "0",
    top: "10px",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "800px",
    backgroundColor: "#F4F6F8",
  },
  container1: {
    width: "500px",
    height: "400px",
    backgroundColor: "#ffffff",
    position: "absolute",
    top: "40px",
    left: "95px",
    width: "550px",
    height: "350px",
  },
  container2: {
    width: "500px",
    height: "400px",
    backgroundColor: "#ffffff",
    position: "absolute",
    top: "40px",
    right: "40px",
    width: "550px",
    height: "350px",
  },
  sidebar: {
    // backgroundColor: "#1564c0",
    backgroundColor: "blue",
  },
  buyButton: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "20px",
    left: "15px",
  },
  textField: {
    position: "absolute",
    top: "100px",
    left: "15px",
    height: "15px",
    width: "250px",
  },
  inputClass: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "100px",
    right: "10px",
  },
  inputClass1: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "200px",
    right: "10px",
  },
  inputClass2: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "200px",
    left: "10px",
  },
  sellButton: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "20px",
    right: "15px",
    "&.MuiButton-root": {
      color: "grey",
    },
  },
  drawer: {
    "&.MuiDrawer-paperAnchorLeft": {
      left: "0",
      right: "auto",
      top: "64px",
      width: "64px",
      alignItems: "center",
      overflow: "hidden",
    },
    "&.MuiListItemIcon-root": {
      color: "#ffffff",
    },
    maincontainer: {
      "&.MuiBackdrop-root": {
        backgroundColor: "#ffffff",
      },
    },
    text: {
      textAlign: "center",
      position: "absolute",
      left: "100px",
      color: "grey",
      top: "50px",
    },
    table: {
      minWidth: 650,
    },
  },
});

export default function Material() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const list = (anchor) => (
    <List>
      {[" ", " ", " ", " ", " ", " "].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            <MemoryIcon className={classes.memoryIcon} />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
  return (
    <div className={classes.maincontainer}>
      <div className={classes.header}>
        <Button
          className={classes.signUp}
          variant="contained"
          startIcon={<ProfileIcon />}
        >
          Sign Up free
        </Button>
        <Button
          className={classes.logIn}
          variant="contained"
          startIcon={<PrintIcon />}
          color="primary"
        >
          Log in
        </Button>
        <div className={classes.logo}>
          <MemoryIcon className={classes.memoryIcon} />
        </div>
      </div>
      <div className={classes.sidebar}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              classes={{
                paper: classes.drawer,
              }}
              anchor={anchor}
              open={true}
              onClose={false}
              variant={"permanent"}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <div className={classes.container}>
        <div className={classes.container1}>
          <Button
            className={classes.buyButton}
            startIcon={<BuyIcon />}
            color="primary"
            variant="contained"
          >
            Buy
          </Button>
          <Button
            className={classes.sellButton}
            startIcon={<BuyIcon />}
            variant="outlined"
          >
            Sell
          </Button>

          <form noValidate autoComplete="off">
            <TextField
              className={classes.textField}
              label="Amout"
              variant="outlined"
            />
            <NativeSelect className={classes.inputClass}>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <NativeSelect className={classes.inputClass1}>
              <option value={10}>India</option>
              <option value={20}>USA</option>
              <option value={30}>UK</option>
            </NativeSelect>
            <NativeSelect className={classes.inputClass2}>
              <option value={10}>All India Offers</option>
              <option value={20}>IMPS</option>
              <option value={30}>Paytm</option>
            </NativeSelect>
            <Button
              className={classes.searchButton}
              startIcon={<SearchIcon />}
              color="primary"
              variant="contained"
            >
              Buy
            </Button>
          </form>
        </div>

        <div className={classes.container2}>
          <Typography className={classes.text} variant={"h3"}>
            {"Buy Monero."}
          </Typography>
          <Typography className={classes.text} variant={"h3"}>
            {"Sell Monero."}
          </Typography>
          <Typography className={classes.text} variant={"h3"}>
            {"Cash or Online."}
          </Typography>
          <Typography className={classes.text} variant={"h3"}>
            {"Anywhere."}
          </Typography>
          <Button
            className={classes.SignUp}
            variant="contained"
            startIcon={<ProfileIcon />}
          >
            Sign Up free
          </Button>
        </div>

        {/* function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} */}
      </div>
    </div>
  );
}
