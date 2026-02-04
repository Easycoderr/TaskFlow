import { useEffect, useReducer } from "react";
import { AuthContext } from "./GlobalStateContexts";
import { supabase } from "../services/supabase";

const initialState = {
  user: null,
  session: null,
  loading: true,
};
function authReducer(state, action) {
  switch (action.type) {
    case "SET_SESSION":
      return {
        ...state,
        session: action.payload.session,
        user: action.payload.user,
        loading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case "CLEAR_SESSION":
      return {
        ...state,
        session: null,
        user: null,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type} `);
  }
}
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          dispatch({
            type: "SET_SESSION",
            payload: { session, user: session.user },
          });
        } else if (event === "SIGNED_OUT") {
          dispatch({
            type: "SET_SESSION",
            payload: { session, user: session?.user },
          });
        }
        dispatch({ type: "SET_LOADING", payload: false });
      },
    );
    // Check initial session status immediately
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        dispatch({
          type: "SET_SESSION",
          payload: { session, user: session.user },
        });
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    getInitialSession();

    // Clean up the listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return <AuthContext value={{ state, dispatch }}>{children}</AuthContext>;
}

export default AuthProvider;
