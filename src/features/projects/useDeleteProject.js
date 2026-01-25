import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteProject } from "../../services/projectsApi";
function useDeleteProject() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteProject(id),
    onSuccess: () => {
      toast.success("project deleted");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      toast.error("There was an error while deleting project");
      console.log("Error:", error.message);
    },
  });
  return { mutate, isPending };
}

export default useDeleteProject;
