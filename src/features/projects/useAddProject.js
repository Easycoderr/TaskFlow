import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUiStates } from "../../hooks/useUiContext";
import { createProject } from "../../services/projectsApi";

function useAddProject() {
  const queryClient = useQueryClient();
  const { dispatch } = useUiStates();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ data, user_id }) => {
      const ProjectData = { ...data, user_id: user_id };
      return createProject(ProjectData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project added successfuly");
      dispatch({ value: "CLOSE_MODAL" });
    },
    onError: (error) => {
      toast.error("There was an error while adding project");
      console.error("Error:", error.message);
    },
  });
  return { mutate, isPending };
}
export default useAddProject;
