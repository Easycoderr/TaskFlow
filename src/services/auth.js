import { supabase } from "./supabase";

// Sign up Auth
export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

// Login Auth
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
