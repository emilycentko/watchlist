import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import TheatersIcon from '@material-ui/icons/Theaters';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    display: "flex",
    bottom: 0,
    marginLeft: 10,
    width: "100%",
  },
  p: {
    fontSize: 10,
    padding: 10,
  }
});

export const FooterNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      classes={{root: {width: '100%'}}}
      
      onChange={(newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <p className={classes.p}>© Emily Centko March 2021</p>
      <BottomNavigationAction label="GitHub" className={classes.icon} icon={<GitHubIcon />} href="https://github.com/emilycentko"/>
      <BottomNavigationAction label="WatchList" className={classes.icon} icon={<TheatersIcon />} href="https://github.com/emilycentko/watchlist"/>
      <BottomNavigationAction label="LinkedIn" className={classes.icon} icon={<LinkedInIcon />} href="https://www.linkedin.com/in/emily-centko"/>
      <BottomNavigationAction label="TMDb API" className={classes.icon} icon={<MovieFilterIcon />} href="https://developers.themoviedb.org/3/getting-started/introduction"/>
      <p className={classes.p}>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
    </BottomNavigation>
  );
}
