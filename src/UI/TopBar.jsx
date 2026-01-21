/* eslint-disable no-unused-vars */
import DarkModeButton from "../components/DarkModeButton";
import { useUiStates } from "../hooks/useUiContext";

function TopBar() {
  const { theme, dispatch } = useUiStates();

  return (
    <header className="bg-bg dark:bg-bg-dark row-start-1 col-span-3 col-start-2 border-b border-gray-200 dark:border-gray-700 p-4 flex flex-row justify-end">
      <div className="flex flex-row items-center gap-1">
        <DarkModeButton
          layout="dashboard"
          theme={theme}
          handleDarkModeToggle={() => dispatch({ value: "TOGGLE_DARK_MODE" })}
        />
        {/* profile avatar */}
        <div className="select-none cursor-pointer w-10 h-10 flex items-center justify-center bg-primary rounded-full text-2xl font-bold font-roba overflow-hidden">
          <span>A</span>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
