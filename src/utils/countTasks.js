export function countTasks(tasks, id) {
  const filteredTasks = tasks?.filter((task) => task.project_id === id);
  const tasksCount = filteredTasks?.length;

  const completedTasks = filteredTasks?.filter(
    (task) => task.status === "completed",
  ).length;
  const progress = tasksCount > 0 ? (completedTasks / tasksCount) * 100 : 0;
  return { filteredTasks, tasksCount, completedTasks, progress };
}
