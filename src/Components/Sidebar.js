import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { AssignmentTurnedIn, Dashboard, FeaturedPlayList, Group } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
const drawerWidth = 250;
const useStyles = makeStyles((theme) => {
  return {
    logo: {
      height: theme.mixins.toolbar
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(2),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerItems: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1)
    },
    active: {
      background: "#f8f9fd",
    },
    logoImage: {
        margin: 'auto',
        height: theme.spacing(18),
        width: theme.spacing(18),
        marginBottom: theme.spacing(1)
    },
    drawerItemsMargin: {
      marginLeft: theme.spacing(1)
    }
  };
});

export default function Sidebar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <Dashboard color="primary" />,
    },
    {
      text: "Tasks",
      path: "/dashboard/tasks",
      icon: <AssignmentTurnedIn color="primary" />,
    },
    {
      text: "Projects",
      path: "/dashboard/projects",
      icon: <FeaturedPlayList color="primary" />,
    },
    {
      text: "Teams",
      path: "/dashboard/teams",
      icon: <Group color="primary" />,
    },
  ];
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <div className={classes.logo}>
            <img src={Logo} alt="TeamWork Logo"/>
          </div>
          <Avatar src="/Admin Photo.png" className={classes.logoImage}/>
        </div>
        <List className={classes.drawerItemsMargin}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={`${classes.drawerItems} ${
                location.pathname === item.path ? classes.active : null
              }`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
