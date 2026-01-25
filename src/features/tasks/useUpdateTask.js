import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../../services/tasksApi";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";

function useUpdateTask() {
  const { dispatch } = useUiStates();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }) => updateTask(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task updated successfully");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error) => {
      console.error(error);
      toast.error("There was an error while updating task.");
    },
  });
  return { mutate, isPending };
}

export default useUpdateTask;
