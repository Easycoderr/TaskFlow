import Heading from "../components/Heading";
import { useState } from "react";
import SettingTabs from "../features/Settings/SettingTabs";
import Input from "../components/Input";
import { BsLock, BsPerson } from "react-icons/bs";
import { BiDownArrow, BiLockAlt } from "react-icons/bi";

function Settings() {
  const [setting, setSetting] = useState("profile");
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Settings</Heading>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {/*tabs  */}
        <SettingTabs setting={setting} setSetting={setSetting} />
        {/* profile */}
        <div className="rounded-md p-4 max-w-6xl  bg-card dark:bg-card-dark flex flex-col gap-6">
          <div className="flex items-center gap-8">
            {/* profile picture */}
            <div className="bg-primary rounded-full w-20 h-20 flex justify-center items-center">
              <span className="font-roba text-5xl">R</span>
            </div>
            {/* name and email */}
            <div className="flex flex-col gap-y-1">
              <span className="text-lg font-semibold tracking-wider text-text dark:text-text-dark">
                Rauf Rezgar
              </span>
              <span className="text-sm tracking-wider text-text-muted dark:text-text-muted-dark">
                example@gmail.com
              </span>
            </div>
          </div>
          {/* fields */}
          <div className="">
            <div className="flex flex-col gap-3">
              <h3 className="font-simebold tracking-wide flex items-center gap-1">
                <BsPerson className="text-primary" />
                <span>Personal Information</span>
              </h3>
              <Input
                type="settings"
                inputType="text"
                inputName="fullname"
                label="Full name"
              />
            </div>
            <div className="flex flex-col gap-3 bg-card shadow-sm p-4 rounded-md">
              <div className="font-simebold tracking-wide flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <BiLockAlt className="text-primary" />
                  <h3>Change Password</h3>
                </div>
                <span>
                  <BiDownArrow />
                </span>
              </div>
              <Input
                type="settings"
                inputType="text"
                inputName="fullname"
                label="Full name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
