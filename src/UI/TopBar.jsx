import DarkModeButton from "../components/DarkModeButton";
import { useAuth } from "../hooks/useAuth";
import { useUiStates } from "../hooks/useUiContext";

import { GoBell } from "react-icons/go";

function TopBar() {
  const { theme, dispatch } = useUiStates();
  const {
    state: { user },
  } = useAuth();

  const userName = user.user_metadata.display_name;
  const avatarLetter = userName.split("")[0];
  return (
    <header className="bg-bg dark:bg-bg-dark row-start-1 col-span-3 col-start-2 border-b border-gray-200 dark:border-gray-700 p-4 flex flex-row justify-end">
      <div className="flex flex-row items-center gap-5">
        <span className="flex items-center">
          <DarkModeButton
            layout="dashboard"
            theme={theme}
            handleDarkModeToggle={() => dispatch({ value: "TOGGLE_DARK_MODE" })}
          />
        </span>
        <span className="flex items-center relative cursor-pointer mt-1">
          <span className="text-[8px] px-1 items-center justify-center bg-red-500 rounded-full text-red-50 absolute -top-1.5 -right-1">
            0
          </span>
          <GoBell className="text-primary" size={20} />
        </span>
        {/* profile avatar & name */}
        <div className="flex items-center gap-2">
          <div className="select-none cursor-pointer w-10 h-10 flex items-center justify-center bg-primary rounded-full text-2xl font-bold font-roba overflow-hidden">
            <span>{avatarLetter}</span>
          </div>
          <p className="text-sm">{userName}</p>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
