import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserAccount } from "../../services/auth";
import { toast } from "react-toastify";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

function useDeleteAccount() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteUserAccount,
    onSuccess: async () => {
      await supabase.auth.setSession({
        access_token: null,
        refresh_token: null,
      });
      queryClient.clear();
      dispatch({ type: "CLEAR_SESSION" });
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong while delete account.");
    },
  });
  return { mutate, isPending };
}

export default useDeleteAccount;
