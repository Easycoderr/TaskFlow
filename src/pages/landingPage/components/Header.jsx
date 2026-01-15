import { HiMoon, HiSun, HiUser } from "react-icons/hi2";
import Logo from "../../../components/Logo";
import { useEffect, useState } from "react";
import Button from "./Button";
function Header({ setShowForm }) {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    isDarkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, [isDarkMode]);
  function handleDarkModeToggle() {
    setIsDarkMode((darkMode) => !darkMode);
  }

  return (
    <header className="container mx-auto py-6 px-4 xl:px-32 flex justify-between items-center z-20 relative">
      {/* logo */}
      <div className="font-roba text-3xl text-primary select-none">
        <Logo />
      </div>
      {/* CTA and dark mode btn*/}
      <div className="flex text-gray-50  items-center">
        <Button
          type={isDarkMode ? "iconSun" : "iconMoon"}
          onClick={handleDarkModeToggle}
          title={
            isDarkMode
              ? "click for switch to light mode"
              : "click for switch to dark mode"
          }
        >
          {isDarkMode ? (
            <HiSun
              size={25}
              className="text-gray-50 hover:text-yellow-300 transition-all duration-300"
            />
          ) : (
            <HiMoon
              size={25}
              className="text-gray-800 hover:text-yellow-500 transition-all duration-300"
            />
          )}
        </Button>

        <div className="sm:flex hidden text-gray-50 items-center gap-2">
          <Button
            type="primary"
            title="sign up for create new account"
            onClick={() => setShowForm("signup")}
          >
            Sign Up
          </Button>
          <Button
            type="secondary"
            title="Log in for open your account"
            onClick={() => setShowForm("login")}
          >
            Log In
          </Button>
        </div>
        <div className="sm:hidden flex items-center text-gray-50 ml-5">
          <Button
            type="iconSun"
            title="click for sign up or login"
            onClick={() => setShowForm("login")}
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
