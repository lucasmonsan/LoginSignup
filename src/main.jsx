import React from 'react';
import ReactDOM from 'react-dom/client';
import { Background } from "./components/Background"
import { Router } from  "./Router"; 
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background/>
    <Router />
  </React.StrictMode>
)