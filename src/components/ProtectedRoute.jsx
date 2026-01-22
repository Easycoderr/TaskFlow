import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Spinner from "./Spinner";

function ProtectedRoute() {
  const { state } = useAuth();
  console.log(state);
  if (state.loading) return <Spinner />;

  return state.user?.aud === "authenticated" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
