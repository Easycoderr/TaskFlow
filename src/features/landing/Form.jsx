import { useRef } from "react";

import UseOutSideClicker from "../../hooks/useOutSideClicker";
import { useUiStates } from "../../hooks/useUiContext";

function Form({ children }) {
  const { modal, dispatch } = useUiStates();
  const refEl = useRef();
  function handleShowForm(value) {
    // console.log(value);
    dispatch({ value: "OPEN_MODAL", payload: { modal: value } });
  }
  UseOutSideClicker(refEl, handleShowForm, true);
  return (
    <div className="md:max-w-md">
      {/* header */}
      <div className="relative grid grid-cols-[1fr_auto_1fr] gap-0.5 mb-6">
        <div className="col-span-3 space-y-2 mb-4">
          <h2 className="text-3xl text-primary text-center font-medium">
            Welcome to TaskFlow
          </h2>
          <p className="text-sm text-center px-5 text-text dark:text-text-dark leading-relaxed">
            Sign Up or Login bellow to manage your project, task, and
            productivity.
          </p>
        </div>
        <Button onChangeShowForm={() => handleShowForm("login")} modal={modal}>
          Login
        </Button>
        <div className="min-h-8 w-[0.1rem] mx-auto"></div>
        <Button onChangeShowForm={() => handleShowForm("signup")} modal={modal}>
          Sign up
        </Button>

        <div
          className={`h-0.5 ${
            modal === "signup" ? "col-start-2" : "col-start-1"
          } col-span-2 col w-full bg-linear-to-l from-transparent via-primary to-transparent transition-all duration-300`}
        ></div>
      </div>
      {/* form login or sign up */}
      {children}
    </div>
  );
}
function Button({ children, onChangeShowForm, modal }) {
  const active = modal === children.toLowerCase().split(" ").join("");
  return (
    <button
      onClick={onChangeShowForm}
      aria-label={children}
      className={`hover:text-primary ${active && "text-primary"}  p-2 rounded-sm transition-all duration-300 cursor-pointer`}
    >
      {children}
    </button>
  );
}
export default Form;
