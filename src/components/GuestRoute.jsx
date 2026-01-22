import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Spinner from "./Spinner";

function GuestRoute() {
  const { state } = useAuth();
  console.log(state);
  if (state.loading) return <Spinner />;

  return state.user?.aud === "authenticated" ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Outlet />
  );
}

export default GuestRoute;
