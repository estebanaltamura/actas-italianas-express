import React from 'react';
import ReactDOM from 'react-dom/client';
import { initFireBase } from './firebase/config';
import './index.css';
import App from './App';

initFireBase()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



