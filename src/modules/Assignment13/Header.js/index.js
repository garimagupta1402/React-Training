import React from "react";
import {
  Paper,
  Box,
  List,
  ListItem,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles({
  styleHeaderContainer: {
    width: "100%",
    position: "fixed",
    top: "0",
    display: "flex",
    zIndex: "2",
  },
  styleLogoContainer: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    color: "gray",
  },
  styleLogoImg: {
    backgroundColor: " rgb(47, 115, 235)",
    width: "63px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "58px",
  },
  styleLogoIcon: {
    color: "#fff",
  },
  styleCafeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "41%",
    margin: "0 40px 0 25px",
    color: "black",
  },
  styleListContainer: {
    width: "53%",
  },
  styleListItem: {
    margin: "0 22px",
  },
  styleLinksContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
  },
  styleLink: {
    textDecoration: "none",
    padding: "10px 0",
    color: "gray",
  },
  styleScheduleLink: {
    textDecoration: "none",
    padding: "10px 0",
    color: "#2f73eb",
  },
  styleSchedule: {
    borderBottom: "3px solid #2f73eb",
    paddingLeft: "0",
    paddingRight: "0",
    margin: "0 16px",
  },
  styleUserContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "16%",
    color: "gray",
    marginLeft: "195px",
  },
  styleUserName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "48%",
    color: "gray",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <Paper component={Box} className={classes.styleHeaderContainer}>
      <Box className={classes.styleLogoContainer}>
        <Box className={classes.styleLogoImg}>
          <WhatshotIcon fontSize={"large"} className={classes.styleLogoIcon} />
        </Box>
        <Box className={classes.styleCafeContainer}>
          <Avatar
            alt="Remy Sharp"
            src="./images/coffee-avatar.jpg"
          />
          <Typography variant={"subtitle1"}>{"Cafe Lovers"}</Typography>
        </Box>
        <ExpandMoreIcon />
      </Box>
      <Box className={classes.styleListContainer}>
        <List disablePadding className={classes.styleLinksContainer}>
          <ListItem className={classes.styleListItem}>
            <Link href={"#"} underline={"none"} className={classes.styleLink}>
              {"Dashboard"}
            </Link>
          </ListItem>
          <ListItem
            className={`${classes.styleSchedule} ${classes.styleListItem}`}
          >
            <Link
              href={"#"}
              underline={"none"}
              className={classes.styleScheduleLink}
            >
              {"Schedule"}
            </Link>
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <Link href={"#"} underline={"none"} className={classes.styleLink}>
              {"Messenger"}
            </Link>
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <Link href={"#"} underline={"none"} className={classes.styleLink}>
              {"Reports"}
            </Link>
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <Link href={"#"} underline={"none"} className={classes.styleLink}>
              {"Staff"}
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.styleUserContainer}>
        <NotificationsNoneIcon />
        <Box className={classes.styleUserName}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Typography variant={"subtitle1"}>{"Anton"}</Typography>
        </Box>
        <ExpandMoreIcon />
      </Box>
    </Paper>
  );
}

export default Header;
