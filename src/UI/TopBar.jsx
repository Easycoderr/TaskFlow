import { useRef, useState } from "react";
import DarkModeButton from "../components/DarkModeButton";
import { useAuth } from "../hooks/useAuth";
import { useUiStates } from "../hooks/useUiContext";

import { GoBell } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { logout } from "../services/auth";
import { toast } from "react-toastify";
import UseOutSideClicker from "../hooks/useOutSideClicker";

function TopBar() {
  const navigate = useNavigate();
  // Local states
  const [drowpDownMenu, setDrowpDownMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const { theme, dispatch } = useUiStates();
  const {
    state: { user },
  } = useAuth();
  UseOutSideClicker(ref, () => setDrowpDownMenu(false));
  // handle logout
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

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
          <GoBell
            className="hover:text-primary transition-all duration-300"
            size={20}
          />
        </span>
        {/* profile avatar & name */}
        <div
          ref={ref}
          onClick={() => setDrowpDownMenu((s) => !s)}
          role="button"
          tabIndex={0}
          className="relative flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-300 p-1 cursor-pointer rounded-full"
        >
          <div className="select-none cursor-pointer w-10 h-10 flex items-center justify-center bg-primary rounded-full text-2xl font-bold font-roba overflow-hidden">
            <span>{avatarLetter}</span>
          </div>
          <p className="text-sm select-none">{userName}</p>
          {drowpDownMenu && (
            <div className="z-80 absolute bg-card shadow-md dark:bg-card-dark top-15 right-0 flex flex-col rounded-md">
              <div className="p-2 py-4 border-b border-gray-200 dark:border-gray-700">
                {user.user_metadata.email}
              </div>
              <Link
                className="flex items-center gap-1 p-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300"
                to="/settings"
              >
                <CgProfile />
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className={`${loading ? "text-red-600/70 hover:bg-red-100/50 bg-red-100/50" : "text-red-600 hover:bg-red-100"} flex items-center gap-1 cursor-pointer border-none text-start p-2 transition-all duration-300`}
                disabled={loading}
              >
                <BiLogOutCircle />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopBar;
