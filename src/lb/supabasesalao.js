import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tcaluxgbwnjtsdanfzgl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYWx1eGdid25qdHNkYW5memdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NjgyMDgsImV4cCI6MjA5NTA0NDIwOH0.5oL7DNdhFZqVUHKNjw8FthRVr9O187SOxKHEMfuHkYI"



export const supabase = createClient(supabaseUrl, supabaseKey
);