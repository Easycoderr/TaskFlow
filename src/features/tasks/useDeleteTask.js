import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../services/tasksApi";
import { toast } from "react-toastify";

function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteTask(id),
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error("There was an error while deleting task");
      console.log("Error:", error.message);
    },
  });
  return { mutate, isPending };
}

export default useDeleteTask;
