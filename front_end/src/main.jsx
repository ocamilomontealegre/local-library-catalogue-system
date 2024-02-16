// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// Importing the root component App
import { App } from './App.jsx';
// Importing the external CSS file for styling
import './index.css';

// Rendering the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the App component with Router for enabling routing
  <Router>
    {/* Enabling strict mode */}
    <React.StrictMode>
      {/* Rendering the App component */}
      <App />
    </React.StrictMode>
  </Router>
);