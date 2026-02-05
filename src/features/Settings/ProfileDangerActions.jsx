import { BsTrash } from "react-icons/bs";
import { LuLogOut, LuTriangleAlert } from "react-icons/lu";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";
import useDeleteAccount from "./useDeleteAccount";
import { useUiStates } from "../../hooks/useUiContext";
import Modal from "../../UI/Modal";
import ConfirmationModal from "../../components/ConfirmationModal";

function ProfileDangerActions() {
  const navigate = useNavigate();
  const { modal, dispatch } = useUiStates();
  const [loading, setLoading] = useState(false);
  const { mutate: mutateDelete, isPending } = useDeleteAccount();

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
  function handleDeleteAccount() {
    mutateDelete();
  }
  return (
    <div className="mt-5 flex flex-col gap-4">
      {/* log out */}
      <button
        onClick={handleLogout}
        disabled={loading}
        type="button"
        aria-label="logout account"
        className={`flex items-center gap-2 border shadow-sm rounded-md p-3 justify-center ${loading ? "border-red-300/50 bg-red-50/10 cursor-not-allowed" : "border-red-300 bg-red-100/10 hover:bg-red-100/40 cursor-pointer "} transition-all duration-300 dark:text-red-100 text-red-950 group`}
      >
        <span>
          <LuLogOut className="group-hover:translate-x-1 transition-all duration-300" />
        </span>
        <span className="tracking-wide text-sm">
          {loading ? "logouting..." : "Logout"}
        </span>
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
          disabled={isPending}
          onClick={() =>
            dispatch({
              value: "OPEN_MODAL",
              payload: {
                modal: "deleteAccount",
              },
            })
          }
          type="button"
          aria-label="logout account"
          className={`flex items-center gap-2 border rounded-md p-3 justify-center ${isPending ? "border-red-300 bg-red-500/10" : "border-red-500 bg-red-500/20"} dark:text-red-50 text-red-950  cursor-pointer group`}
        >
          <span>
            <BsTrash className="transition-all duration-300" />
          </span>
          <span className="tracking-wide text-sm">Delete Account</span>
        </button>
      </div>
      {modal === "deleteAccount" && (
        <Modal>
          <ConfirmationModal
            title="Deletion"
            message="You're about to delete your account. This will permanently remove all of your data and cannot be undone. Are you sure you want to proceed?"
            onConfirm={handleDeleteAccount}
          />
        </Modal>
      )}
    </div>
  );
}

export default ProfileDangerActions;
