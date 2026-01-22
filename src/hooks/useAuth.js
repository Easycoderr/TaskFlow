import { useContext } from "react";
import { AuthContext } from "../context/GlobalStateContexts";
export const useAuth = () => useContext(AuthContext);
