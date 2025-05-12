import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Agregamos BrowserRouter
import App from './App';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* Aquí envolvemos la app con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
