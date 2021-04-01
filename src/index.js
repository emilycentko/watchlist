import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WatchListApp } from './components/WatchListApp';
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
      contrastText: 'amber[400]',
    },
    secondary: {
      main: amber[400],
      contrastText: 'blue[900]',
    },
  },
  typography: {
    fontFamily: 
      'Arial',
    fontSize: 14,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Router>
      < WatchListApp />
      </Router>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);