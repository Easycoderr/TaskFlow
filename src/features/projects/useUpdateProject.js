import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";
import { updateProject } from "../../services/projectsApi";
function useUpdateProject() {
  const { dispatch } = useUiStates();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }) => updateProject(id, data),
    onMutate: async (id, data) => {
      const { name, description, status, due_date } = data;
      await queryClient.cancelQueries(["projects"]);

      const previous = queryClient.getQueryData(["projects"]);

      queryClient.setQueryData(["projects"], (old = []) =>
        old.map((project) =>
          project.id === id
            ? { ...project, name, description, status, due_date }
            : project,
        ),
      );
      return { previous };
    },
    onSuccess: () => {
      toast.success("Project updated.");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error, vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["projects"], context.previous);
      }
      console.error(error);
      toast.error("There was an error while updating project.");
    },
    onSettled: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
  return { mutate, isPending };
}

export default useUpdateProject;
