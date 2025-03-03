import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ModalAddTransaction from "./components/ModalAddTransaction/ModalAddTransaction";

import HomeTab from "./components/HomeTab/HomeTab";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

// Other imports will be added as they are implemented

function App() {
  return (
    <>
      <Routes>
        {/* Public routes will be added here */}
        <Route element={<PublicRoute restricted={true} />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* PrivateRoute wrapper will be added when authentication is implemented */}
        <Route element={<PrivateRoute />}>
          {/* Buraya da login olmuş kullanıcının görmesi gereken sayfaları ekleyelim */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/home" element={<HomeTab />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ModalAddTransaction />
    </>
  );
}

export default App;
