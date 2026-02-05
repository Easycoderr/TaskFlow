import { CgProfile } from "react-icons/cg";
import { MdStyle } from "react-icons/md";
function SettingTabs({ setting, setSetting }) {
  return (
    <div className="bg-card dark:bg-card-dark rounded-md w-fit">
      <ul className="text-text dark:text-text-dark flex items-center gap-4 overflow-x-auto p-2">
        <li
          onClick={() => setSetting("profile")}
          className="flex items-center gap-1 relative group cursor-pointer transition-all duration-300 hover:bg-primary/30 p-1 px-2 rounded-md"
        >
          <CgProfile />
          <span className="transition-all font-medium duration-200 cursor-pointer">
            Profile
          </span>
          <div
            className={`${setting === "profile" && "w-full"} absolute -bottom-1.5 left-0.5 w-0 h-[1.2px] transition-all duration-200 bg-primary`}
          ></div>
        </li>
        <li
          onClick={() => setSetting("appearance")}
          className="flex items-center gap-1 relative group cursor-pointer transition-all duration-300 hover:bg-primary/30 p-1 px-2 rounded-md"
        >
          <MdStyle />
          <span className="transition-all font-medium duration-200 cursor-pointer">
            Appearance
          </span>
          <div
            className={`${setting === "appearance" && "w-full"} absolute -bottom-1.5 left-0.5 w-0 h-[1.2px] transition-all duration-200 bg-primary`}
          ></div>
        </li>
      </ul>
    </div>
  );
}

export default SettingTabs;
