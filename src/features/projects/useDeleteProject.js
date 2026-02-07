import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteProject } from "../../services/projectsApi";
function useDeleteProject() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteProject(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries(["projects"]);

      const previous = queryClient.getQueryData(["projects"]);

      queryClient.setQueryData(["projects"], (old = []) =>
        old.filter((project) => project.id !== id),
      );
      return { previous };
    },
    onSuccess: () => {
      toast.success("project deleted");
    },
    onError: (error, vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["projects"], context.previous);
      }
      toast.error(
        "There was an error while deleting project, changes reverted",
      );
      console.log("Error:", error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
  return { mutate, isPending };
}

export default useDeleteProject;
