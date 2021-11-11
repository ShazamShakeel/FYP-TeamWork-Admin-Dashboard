import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import format from "date-fns/format";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      color: "black",
      background: 'white'
    },
    avatar: {
      marginLeft: theme.spacing(4),
    },
    dashboardText: {
      flexGrow: 1,
      textAlign: "center",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
  };
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography>{format(new Date(), "h:mm a, dd/MM/Y")}</Typography>
        <Typography
          className={classes.dashboardText}
          variant="h5"
        >
          Dashboard
        </Typography>
        <div className={classes.flex}>
          <Typography>Masoom</Typography>
          <Avatar src="/Admin Photo.jpg" className={classes.avatar} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
