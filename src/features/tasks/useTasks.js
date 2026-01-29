import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/tasksApi";

function useTasks() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => {
      const data = getTasks();
      return data;
    },
  });
  return { data, isPending, isError };
}

export default useTasks;
