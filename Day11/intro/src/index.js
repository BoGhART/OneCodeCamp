import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Welcome from './component/Welcome';
import Activity from './Activities/act2';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const trainee = "Bogart"
// const element = <h1>Hello, {trainee}</h1>

root.render(
  <React.StrictMode>
    <Activity />
  </React.StrictMode>
);

