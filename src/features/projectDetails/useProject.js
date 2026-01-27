import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProject } from "../../services/projectsApi";

function useProject(projectId) {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProject(projectId),
    initialData: () =>
      queryClient.getQueryData(["projects"])?.find((p) => p.id === projectId),
  });
  return { data, isPending };
}

export default useProject;
