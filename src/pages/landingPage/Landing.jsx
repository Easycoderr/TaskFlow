import { HiMoon, HiSun } from "react-icons/hi2";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    isDarkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });
  function handleDarkModeToggle() {
    setIsDarkMode((darkMode) => !darkMode);
  }
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark">
      {/* header */}
      <header className="container py-6 xl:px-32 flex justify-between items-center">
        {/* logo */}
        <div class="font-roba text-3xl text-primary select-none">
          <span class="bg-gradient-to-l from-primary via-secondary to-primary bg-300 cursor-pointer  text-transparent bg-clip-text select-none animate-logo">
            TaskFlow
          </span>
        </div>
        {/* CTA */}
        <div className="flex text-gray-50  items-center gap-2">
          <Button
            type={isDarkMode ? "iconLight" : "iconMoon"}
            onClick={handleDarkModeToggle}
          >
            {isDarkMode ? (
              <HiSun size={25} className="text-gray-800" />
            ) : (
              <HiMoon size={25} />
            )}
          </Button>
          <Button type="primary">Sign Up</Button>
          <Button type="secondary">Log In</Button>
        </div>
      </header>
    </div>
  );
}

export default Landing;
