import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Statistics from "./components/Statistics/Statistics";
// Other imports will be added as they are implemented

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes will be added here */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/statistics" element={<Statistics />} />
        {/* PrivateRoute wrapper will be added when authentication is implemented */}
        <Route path="*" element={<DashboardPage />} />{" "}
        {/* Temporary fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
