import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iylvecavielticjtoyau.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bHZlY2F2aWVsdGljanRveWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNzE0NjEsImV4cCI6MjAxMjY0NzQ2MX0.n2uWCyJyOmdYuAuROr9EQsJ90JxVtrJdR8PuBhdjCfA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
