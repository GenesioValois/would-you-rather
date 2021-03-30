import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import List from "@material-ui/core/List";

const useStyles = makeStyles(() => ({
  link: { color: "inherit", textDecoration: "inherit" },
}));

const menuEntries = [
  { name: "Home", to: "/home", icon: <HomeIcon /> },
  { name: "Add question", to: "/add", icon: <AddBoxIcon /> },
  { name: "Leaderboard", to: "/leaderboard", icon: <EqualizerIcon /> },
];

const MenuList = () => {
  const classes = useStyles();
  return (
    <List>
      {menuEntries.map((entry) => (
        <Link key={entry.name} to={entry.to} className={classes.link}>
          <ListItem button>
            <ListItemIcon>{entry.icon}</ListItemIcon>
            <ListItemText primary={entry.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default MenuList;
