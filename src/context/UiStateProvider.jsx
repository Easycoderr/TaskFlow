import { useEffect, useReducer } from "react";
import { UiContext } from "./GlobalStateContexts";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
  modal: null,
  modalData: null,
};

function uiReducer(state, action) {
  switch (action.value) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: action.payload.modal,
        modalData: action.payload.data,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: null,
        modalData: null,
      };
    default:
      return state;
  }
}

function UIStateProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [{ modal, theme, isModalOpen }, dispatch] = useReducer(
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
    <UiContext.Provider value={{ modal, theme, isModalOpen, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}

export default UIStateProvider;
