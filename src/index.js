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
      contrastText: '#000',
    },
    secondary: {
      main: amber[400],
      contrastText: '#1a237e',
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