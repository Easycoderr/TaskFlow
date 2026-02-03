import { useUiStates } from "../../hooks/useUiContext";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

function Appearance() {
  const { theme, dispatch } = useUiStates();
  const isDark = theme === "dark";

  return (
    <div className="rounded-md p-4 max-w-2xl bg-card dark:bg-card-dark flex flex-col gap-6">
      <div className="space-y-3">
        <h3 className="font-semibold tracking-wide">Theme</h3>
        <label className="inline-flex items-center cursor-pointer">
          <input
            onChange={() => dispatch({ value: "TOGGLE_DARK_MODE" })}
            checked={isDark}
            type="checkbox"
            className="sr-only peer"
          />
          {/* Main Container: Increased to w-12 h-6.5 */}
          <div className="relative w-12 h-6.5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
            {/* Icon Container: Centered logic updated for size */}
            <div
              className={`absolute top-1/2 -translate-y-[45%] transition-all duration-300 ${
                isDark ? "right-2" : "left-2"
              } z-10 flex items-center justify-center pointer-events-none`}
            >
              {isDark ? (
                <BsFillMoonFill size={12} className="text-gray-700" />
              ) : (
                <BsSunFill size={12} className="text-amber-500" />
              )}
            </div>
          </div>
          <span className="select-none ms-3 text-base font-medium text-heading">
            {theme[0].toUpperCase() + theme.slice(1, theme.length)} mode
          </span>
        </label>
      </div>
    </div>
  );
}

export default Appearance;
