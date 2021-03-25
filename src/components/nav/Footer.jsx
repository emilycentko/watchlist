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
    width: 700,
    bottom: 0,
    marginLeft: 40,
  },
});

export const FooterNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <p>© Emily Centko March 2021</p>
      <BottomNavigationAction label="GitHub" className={classes.icon} icon={<GitHubIcon />} href="https://github.com/emilycentko"/>
      <BottomNavigationAction label="WatchList" className={classes.icon} icon={<TheatersIcon />} href="https://github.com/emilycentko/watchlist"/>
      <BottomNavigationAction label="TMDb API" className={classes.icon} icon={<MovieFilterIcon />} href="https://developers.themoviedb.org/3/getting-started/introduction"/>
      <BottomNavigationAction label="LinkedIn" className={classes.icon} icon={<LinkedInIcon />} href="https://www.linkedin.com/in/emily-centko"/>
    </BottomNavigation>
  );
}
