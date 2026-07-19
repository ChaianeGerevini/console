import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
          <App />

    </BrowserRouter>
);

// Aqui o arquivo esta dizendo
//"Pegue essa <div id="root"> e coloque o componente <App /> dentro dela."

//Agora vamos para app.jsx