/* eslint-disable no-unused-vars */
import DarkModeButton from "../components/DarkModeButton";
import { useAuth } from "../hooks/useAuth";
import { useUiStates } from "../hooks/useUiContext";

function TopBar() {
  const { theme, dispatch } = useUiStates();
  const {
    state: { user },
  } = useAuth();
  console.log(user);
  const userName = user.user_metadata.display_name;
  const avatarLetter = userName.split("")[0];
  return (
    <header className="bg-bg dark:bg-bg-dark row-start-1 col-span-3 col-start-2 border-b border-gray-200 dark:border-gray-700 p-4 flex flex-row justify-end">
      <div className="flex flex-row items-center gap-1">
        <DarkModeButton
          layout="dashboard"
          theme={theme}
          handleDarkModeToggle={() => dispatch({ value: "TOGGLE_DARK_MODE" })}
        />
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
