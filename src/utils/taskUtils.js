// Helper to strip time and get a clean date number
const getStartOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime(); // Returns a pure number like 1769472000000
};

export function isToday(date) {
  const today = getStartOfDay(new Date());
  const checkDate = getStartOfDay(date);
  return checkDate === today;
}

export function isOverDue(task) {
  const today = getStartOfDay(new Date());
  const dueDate = getStartOfDay(task.due_date);

  // Use numerical comparison: 1767916800000 < 1769472000000
  return dueDate < today && task.status.toLowerCase() !== "completed";
}

export function countTask(data, predicate) {
  return data?.filter(predicate);
}
