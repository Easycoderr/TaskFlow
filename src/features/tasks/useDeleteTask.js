import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../services/tasksApi";
import { toast } from "react-toastify";

function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteTask(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries(["tasks"]);

      const previous = queryClient.getQueryData(["tasks"]);

      queryClient.setQueryData(["tasks"], (old = []) =>
        old.filter((task) => task.id !== id),
      );
      return { previous };
    },
    onSuccess: () => {
      toast.success("Task deleted");
    },
    onError: (error, vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["tasks"], context.previous);
      }
      toast.error("There was an error while deleting task, changes reverted");
      console.log("Error:", error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { mutate, isPending };
}

export default useDeleteTask;
