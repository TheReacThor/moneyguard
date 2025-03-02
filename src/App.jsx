import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

import HomeTab from "./components/HomeTab/HomeTab";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";


// Other imports will be added as they are implemented

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes will be added here */}
        <Route element={<PublicRoute restricted={true} />}>
          {/* Login ve register page olduğunda buraları açabiliriz */}
          {/* <Route path="/login" element={<LoginPage />} */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Route>

        {/* PrivateRoute wrapper will be added when authentication is implemented */}

        <Route element={<PrivateRoute />}>
          {/* Buraya da login olmuş kullanıcının görmesi gereken sayfaları ekleyelim */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/home" element={<HomeTab />} />
        </Route>
        <Route path="*" element={<DashboardPage />} />
        {/* Temporary fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
