import { useMutation } from "@tanstack/react-query";
import { updateUserPass } from "../../services/auth";
import { toast } from "react-toastify";

function useUpdatePassword() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ password }) => updateUserPass({ password }), // Simplified syntax
    onSuccess: () => {
      toast.success("Password updated successfully.");
    },
    onError: (error) => {
      toast.error(error.message || "Update failed.");
    },
  });
  return { mutate, isPending };
}

export default useUpdatePassword;
