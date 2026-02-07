import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../../services/tasksApi";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";

function useUpdateTask() {
  const { dispatch } = useUiStates();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }) => updateTask(id, data),
    onMutate: async ({ id, data }) => {
      const { status } = data;
      // stop outgoing refetches for tasks
      await queryClient.cancelQueries(["tasks"]);
      // snapshot previous tasks for rollback
      const previous = queryClient.getQueryData(["tasks"]);
      // optimistic update: change status in cache immediately
      queryClient.setQueryData(["tasks"], (old = []) => {
        old.map((task) => (task.id === id ? { ...task, status } : task));
      });
      // return context object for onError
      return { previous };
    },
    onSuccess: () => {
      toast.success("Task updated");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error, vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["tasks"], context.previous);
      }
      console.error(error);
      toast.error("There was an error while updating task, changes reverted");
    },
    onSettled: () => {
      // always refetch to ensure the cache is in sync with server
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { mutate, isPending };
}

export default useUpdateTask;
