import { useEffect, useReducer } from "react";
import { UiContext } from "./GlobalStateContexts";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
  isModalOpen: null,
};

function uiReducer(state, action) {
  switch (action.value) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
}

function UIStateProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [{ theme, isModalOpen }, dispatch] = useReducer(
    uiReducer,
    initialState,
  );
  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);
  localStorage.setItem("theme", JSON.stringify(theme));
  return (
    <UiContext.Provider value={{ theme, isModalOpen, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}

export default UIStateProvider;
