import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  gitHub: {
    position: "absolute",
    bottom: 0,
    right: 0
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
      <BottomNavigationAction label="GitHub" className={classes.gitHub} icon={<GitHubIcon />} href="https://github.com/emilycentko/watchlist"/>
    </BottomNavigation>
  );
}
