import Heading from "../components/Heading";
import { useState } from "react";
import SettingTabs from "../features/Settings/SettingTabs";
import Profile from "../features/Settings/Profile";
import Appearance from "../features/Settings/Appearance";

function Settings() {
  const [setting, setSetting] = useState("profile");

  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10 overflow-x-hidden">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Settings</Heading>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/*tabs  */}
        <SettingTabs setting={setting} setSetting={setSetting} />

        <div className="overflow-y-auto"></div>
        {/* profile */}
        {setting === "profile" ? <Profile /> : <Appearance />}
      </div>
    </div>
  );
}

export default Settings;
