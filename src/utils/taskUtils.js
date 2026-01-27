// today date
const today = new Date().toLocaleDateString();
export function isToday(date) {
  return new Date(date).toLocaleDateString() === today;
}
export function isOverDue(task) {
  const dueDate = new Date(task.due_date).toLocaleDateString();
  return dueDate < today && task.status.toLowerCase() !== "completed";
}
export function countTask(tasks, predicate) {
  return tasks?.filter(predicate);
}
