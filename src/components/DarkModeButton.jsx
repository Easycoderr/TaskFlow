import { HiMoon, HiSun } from "react-icons/hi";

function DarkModeButton({ handleDarkModeToggle, theme, layout }) {
  return (
    <button
      type="button"
      role="switch"
      aria-label="Toggle dark mode"
      aria-controls="page-content"
      onClick={handleDarkModeToggle}
      className="cursor-pointer"
      title={
        theme === "dark"
          ? "click for switch to light mode"
          : "click for switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <HiSun
          size={25}
          className={`text-gray-50 ${layout === "dashboard" ? "hover:text-yellow-500" : " hover:text-yellow-300"} transition-all duration-300`}
        />
      ) : (
        <HiMoon
          size={25}
          className="text-gray-800 hover:text-yellow-500 transition-all duration-300"
        />
      )}
    </button>
  );
}

export default DarkModeButton;
