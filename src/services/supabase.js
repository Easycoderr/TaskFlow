import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.evn.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.evn.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase = createClient(supabaseUrl, supabasePublishableKey);
