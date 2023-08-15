import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout.css';
import './breakpoint.css';
import './variables.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();