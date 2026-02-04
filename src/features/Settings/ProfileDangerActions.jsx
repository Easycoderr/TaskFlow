import { BsTrash } from "react-icons/bs";
import { LuLogOut, LuTriangleAlert } from "react-icons/lu";

function ProfileDangerActions() {
  return (
    <div className="mt-5 flex flex-col gap-4">
      {/* log out */}
      <button
        type="button"
        aria-label="logout account"
        className="flex items-center gap-2 border shadow-sm rounded-md p-3 justify-center border-red-300 bg-red-300/20 dark:text-red-100 text-red-950  cursor-pointer group"
      >
        <span>
          <LuLogOut className="group-hover:translate-x-1 transition-all duration-300" />
        </span>
        <span className="tracking-wide text-sm">Logout</span>
      </button>
      {/* delete account */}
      <div className="flex flex-col gap-2 shadow-sm  bg-red-200/30 dark:bg-transparent p-2 border border-red-500/20 rounded-md">
        <h3 className="font-semibold flex items-center gap-1 text-red-600/80">
          <span>
            <LuTriangleAlert />
          </span>
          <span>Danger zone</span>
        </h3>
        <p className="leading-relaxed text-sm">
          This action cannot be undone. All your data will be permanently
          deleted.
        </p>
        <button
          type="button"
          aria-label="logout account"
          className="flex items-center gap-2 border rounded-md p-3 justify-center border-red-500 bg-red-500/20 dark:text-red-50 text-red-950  cursor-pointer group"
        >
          <span>
            <BsTrash className="transition-all duration-300" />
          </span>
          <span className="tracking-wide text-sm">Delete Account</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileDangerActions;
