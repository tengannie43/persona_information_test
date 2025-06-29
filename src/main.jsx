import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import PersonaInformationPage from './PersonaInformationPage';
import KidneyStatusPage from './KidneyStatusPage';

<BrowserRouter>
  <Routes>
    {/* 設定首頁：登入頁 */}
    <Route path="/" element={<LoginPage />} />
    {/* 1-1 頁面 */}
    <Route path="/persona" element={<PersonaInformationPage />} />
    {/* 1-2 頁面 */}
    <Route path="/kidney" element={<KidneyStatusPage />} />
    {/* 預設跳轉，如果找不到路徑，自動回首頁 */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>
