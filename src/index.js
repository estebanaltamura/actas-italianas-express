import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initFireBase } from './firebase/config';
import './index.css';
import App from './App';
import { GraciasPorSuConsulta } from './components/GraciasPorSuConsulta/GraciasPorSuConsulta';

initFireBase()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element = {<App />}/>
        <Route path="/graciasPorSuConsulta" element = {<GraciasPorSuConsulta />}/>
        
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);



