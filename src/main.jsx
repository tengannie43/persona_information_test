import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PersonaInformationPage from './PersonaInformationPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 預設首頁：登入頁 */}
        <Route path="/" element={<LoginPage />} />
        {/* 基本資料頁 */}
        <Route path="/persona" element={<PersonaInformationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
