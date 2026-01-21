import { useContext } from "react";
import { UiContext } from "../context/GlobalStateContexts";

export function useUiStates() {
  const context = useContext(UiContext);
  if (!context) return new Error("The context is use outside the provider");
  return context;
}
