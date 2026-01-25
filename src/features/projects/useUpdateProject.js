import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";
import { updateProject } from "../../services/projectsApi";
function useUpdateProject() {
  const { dispatch } = useUiStates();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }) => updateProject(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project updated successfully");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error) => {
      console.error(error);
      toast.error("There was an error while updating project.");
    },
  });
  return { mutate, isPending };
}

export default useUpdateProject;
