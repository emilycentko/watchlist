import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WatchListApp } from './components/WatchListApp';
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import cyan from '@material-ui/core/colors/cyan';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[900],
      contrastText: '#000',
    },
    secondary: {
      main: cyan[50],
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 
      'Arial',
    fontSize: 11,
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