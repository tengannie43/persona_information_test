import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import PersonaInformationPage from './PersonaInformationPage';
import KidneyStatusPage from './KidneyStatusPage';
import AllergySelectionPage from './AllergySelectionPage';
import ExerciseSelectionPage from './ExerciseSelectionPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 預設首頁 */}
        <Route path="/" element={<LoginPage />} />
        {/* 1-1 頁面 */}
        <Route path="/persona" element={<PersonaInformationPage />} />
        {/* 1-2 頁面 */}
        <Route path="/kidney" element={<KidneyStatusPage />} />
        <Route path="/allergy" element={<AllergySelectionPage />} />
        <Route path="/exercise" element={<ExerciseSelectionPage />} />
        {/* 如果網址打錯，直接導回首頁 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
