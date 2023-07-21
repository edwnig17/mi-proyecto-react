import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.title = 'Edwing Contador clicks' //Llamamos al document.title para poder asignar un title a nuestro pagina web

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

