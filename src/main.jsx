import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PersonaInformationPage from './PersonaInformationPage';
import KidneyStatusPage from './KidneyStatusPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/persona" element={<PersonaInformationPage />} />
        <Route path="/kidney" element={<KidneyStatusPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
