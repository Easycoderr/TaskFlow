import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/auth";
import { toast } from "react-toastify";

function useUpdateUser() {
  const { mutate, isPending } = useMutation({
    mutationFn: (userData) => updateUser(userData),
    onSuccess: () => {
      toast.success("Profile updated successfully.");
    },
    onError: (error) => {
      toast.error("Samething wen wrong while updating user profile.");
      console.log(error.message);
    },
  });
  return { mutate, isPending };
}

export default useUpdateUser;
