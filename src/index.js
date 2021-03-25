import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WatchListApp } from './components/WatchListApp';
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B9DFE4',
      main: '#A52422',
      dark: '#080F0F',
      contrastText: '#000',
    },
    secondary: {
      light: '#F7FCF0',
      main: '#B9DFE4',
      dark:'#080F0F',
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