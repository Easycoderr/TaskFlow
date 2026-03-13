import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router";
import { logout } from "../services/auth";
import { toast } from "react-toastify";

function ProfileDropDown({ user }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  return (
    <div className="z-80 absolute border border-gray-200 dark:border-gray-700 border-t-0 bg-card shadow-md dark:bg-card-dark top-15 right-0 flex flex-col rounded-md">
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
        className={`${loading ? "text-red-600/70 hover:bg-red-100/20 bg-red-100/50" : "text-red-600 hover:bg-red-100"} flex items-center gap-1 cursor-pointer border-none text-start p-2 transition-all duration-300  dark:hover:bg-red-100/20`}
        disabled={loading}
      >
        <BiLogOutCircle />
        Logout
      </button>
    </div>
  );
}

export default ProfileDropDown;
