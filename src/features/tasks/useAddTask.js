import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../services/tasksApi";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";

function useAddTask() {
  const queryClient = useQueryClient();
  const { dispatch } = useUiStates();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ data, user_id }) => {
      const taskData = { ...data, user_id: user_id };
      return createTask(taskData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added successfuly");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error) => {
      toast.error("There was an error while adding task");
      console.error("Error:", error.message);
    },
  });
  return { mutate, isPending };
}
export default useAddTask;
