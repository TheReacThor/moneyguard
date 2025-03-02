import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

// Other imports will be added as they are implemented

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes will be added here */}
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* PrivateRoute wrapper will be added when authentication is implemented */}
        <Route path="*" element={<DashboardPage />} />{" "}
        {/* Temporary fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
