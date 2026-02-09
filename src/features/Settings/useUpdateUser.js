import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/auth";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

function useUpdateUser() {
  const { dispatch } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: (userData) => updateUser(userData),

    onSuccess: (data) => {
      toast.success("Profile updated successfully.");
      dispatch({
        type: "UPDATE_USER",
        payload: { user: data.user },
      });
    },
    onError: (error) => {
      toast.error("Samething wen wrong while updating user profile.");
      console.log(error.message);
    },
  });
  return { mutate, isPending };
}

export default useUpdateUser;
