import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WatchListApp } from './components/WatchListApp';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WatchListApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);