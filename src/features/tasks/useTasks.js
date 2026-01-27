import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/tasksApi";

function useTasks() {
  const { data, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => {
      const data = getTasks();
      return data;
    },
  });
  return { data, isPending };
}

export default useTasks;
