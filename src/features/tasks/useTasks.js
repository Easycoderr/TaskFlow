import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/tasksApi";

function useTasks() {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => {
      const data = getTasks();
      return data;
    },
  });
  return { data, isLoading };
}

export default useTasks;
