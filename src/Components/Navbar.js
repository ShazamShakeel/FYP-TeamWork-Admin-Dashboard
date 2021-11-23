import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import format from "date-fns/format";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      color: "black",
      background: "white",
    },
    dashboardText: {
      flexGrow: 1,
      textAlign: "center",
    },
    date: {
      opacity: 0
    }
  };
});

export default function Navbar({name}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography>Wellcome, Admin !</Typography>

        <Typography className={classes.dashboardText} variant="h5">
          {name}
        </Typography>

        <Typography className={classes.date}>{format(new Date(), "h:mm a, dd/MM/Y")}</Typography>
      </Toolbar>
    </AppBar>
  );
}
