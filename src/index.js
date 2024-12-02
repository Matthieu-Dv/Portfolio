import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Styles
import './styles/main.scss';
//Font
import '@fontsource/montserrat';
import '@fontsource/roboto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
