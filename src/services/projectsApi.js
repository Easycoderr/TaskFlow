import { supabase } from "./supabase";
// get projects
export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw new Error(error.message);
  return data;
}

// fetch project by id for project details
export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();
  if (error) throw new Error(error.message);
  return data;
}
// create Project
export async function createProject(newProject) {
  const { data, error } = await supabase
    .from("projects")
    .insert(newProject)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// update Project

export async function updateProject(projectId, updatedProject) {
  const { data, error } = await supabase
    .from("projects")
    .update(updatedProject)
    .eq("id", projectId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}
// update status Project

export async function updateStatusProject(projectId, newStatus) {
  const { data, error } = await supabase
    .from("projects")
    .update({ status: newStatus })
    .eq("id", projectId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// delete project
export async function deleteProject(projectId) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) throw new Error(error.message);
}
