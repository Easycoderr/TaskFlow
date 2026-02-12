import { HiUser } from "react-icons/hi2";
import Logo from "../../../components/Logo";
import { useEffect } from "react";
import Button from "../../../components/Button";
import DarkModeButton from "../../../components/DarkModeButton";
import { useUiStates } from "../../../hooks/useUiContext";
function Header() {
  const { theme, dispatch } = useUiStates();

  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);
  function handleDarkModeToggle() {
    dispatch({ value: "TOGGLE_DARK_MODE" });
  }

  return (
    <header className="container mx-auto py-6 px-4 xl:px-32 flex justify-between items-center z-20 relative">
      {/* logo */}
      <div className="font-roba text-3xl text-primary select-none">
        <Logo />
      </div>
      {/* CTA and dark mode btn*/}
      <div className="flex text-gray-50  items-center">
        <div className="mr-4 flex items-center">
          <DarkModeButton
            theme={theme}
            handleDarkModeToggle={handleDarkModeToggle}
          />
        </div>

        <div className="sm:flex hidden text-gray-50 items-center gap-2">
          <Button
            type="primary"
            title="sign up for create new account"
            onClick={() =>
              dispatch({ value: "OPEN_MODAL", payload: { modal: "signup" } })
            }
          >
            Sign Up
          </Button>
          <Button
            type="secondary"
            title="Log in for open your account"
            onClick={() =>
              dispatch({
                value: "OPEN_MODAL",
                payload: { modal: "login" },
              })
            }
          >
            Log In
          </Button>
        </div>
        <div className="sm:hidden flex items-center text-gray-50 ml-5">
          <Button
            type="iconSun"
            title="click for sign up or login"
            onClick={() =>
              dispatch({
                value: "OPEN_MODAL",
                payload: { modal: "login" },
              })
            }
          >
            <HiUser
              size={25}
              className="text-text dark:text-text-dark hover:text-primary  transition-all duration-300"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
