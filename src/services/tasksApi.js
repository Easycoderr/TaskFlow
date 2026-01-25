import { supabase } from "./supabase";
// get tasks
export async function getTasks() {
  const { data, error } = await supabase.from("tasks").select(`
    *,
    projects!tasks_project_id_fkey(
      id,
      name
    )
  `);

  if (error) throw new Error(error.message);
  return data;
}

// create task
export async function createTask(newTask) {
  const { data, error } = await supabase.from("tasks").insert(newTask).select();
  if (error) throw new Error(error.message);
  return data;
}

// update task

export async function updateTask(taskId, updatedTask) {
  const { data, error } = await supabase
    .from("tasks")
    .update(updatedTask)
    .eq("id", taskId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// update status task

export async function updateStatusTask(taskId, newStatus) {
  const { data, error } = await supabase
    .from("tasks")
    .update({ status: newStatus })
    .eq("id", taskId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// delete task
export async function deleteTask(taskId) {
  const { error } = await supabase.from("tasks").delete().eq("id", taskId);

  if (error) throw new Error(error.message);
}
