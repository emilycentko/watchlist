import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WatchListApp } from './components/WatchListApp';
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
    secondary: {
      main: red[500],
      contrastText: '#1F7EFD',
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