import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/projectsApi";

function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => {
      const data = getProjects();
      return data;
    },
  });
  return { data, isLoading };
}

export default useProjects;
