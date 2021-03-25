import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: "Nunito Sans",
    color: "white",
  },
  navLinks: {
    flexGrow: 1,
    textDecoration: 'none',
    color: "white",
  },
  logout: {
    color: "white",
  }
}));


export const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.navLinks} to="/" component={ Link } color="inherit" underline="inherit">
            ADD MOVIES
          </Typography>
          <Typography variant="h6" className={classes.navLinks} to="/watchlists" component={ Link } color="inherit" underline="inherit">
            WATCHLISTS
          </Typography>

          <Button className={classes.logout} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}