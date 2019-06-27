import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  root: {
    display: 'flex'
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: "100%",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  activeStyle: {
    fontWeight: "bold",
    color: "#000000",
    backgroundColor: "#D4D4D4"
  },
  listItem: {
    fontWeight: "inherit",
    color: "inherit",
    backgroundColor: "inherit"
  },
  navLink: {
    textDecoration: "none"
  },
  list: {
    width: 150,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open: !state.open });
  };

  const SideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink exact to="/" className={classes.navLink} activeClassName={classes.activeStyle}>
          <ListItem button key={"Home"} className={classes.listItem}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
        <NavLink to="/search" className={classes.navLink} activeClassName={classes.activeStyle}>
          <ListItem button key={"Search"} className={classes.listItem}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary={"Search"} />
          </ListItem>
        </NavLink>
        <NavLink to="/save" className={classes.navLink} activeClassName={classes.activeStyle}>
          <ListItem button key={"Save"} className={classes.listItem}>
            <ListItemIcon><SaveIcon /></ListItemIcon>
            <ListItemText primary={"Save"} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Fuzzy Search
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="App Tools">
        <SwipeableDrawer
          open={state.open}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <SideList />
        </SwipeableDrawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
