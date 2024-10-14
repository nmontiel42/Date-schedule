// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App'; // Asegúrate de que la ruta sea correcta
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);