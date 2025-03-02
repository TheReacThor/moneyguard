import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ restricted = false }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
