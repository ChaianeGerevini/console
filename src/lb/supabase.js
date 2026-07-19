import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lblnsalijvhzcrhmmmvt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibG5zYWxpanZoemNyaG1tbXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwODgxODEsImV4cCI6MjA5NTY2NDE4MX0.gWWWqm9ZAcndxhPMIy2Muf8WJLhxwRDFfoT9WJ7gmo8";



export const supabase = createClient(supabaseUrl, supabaseKey
);