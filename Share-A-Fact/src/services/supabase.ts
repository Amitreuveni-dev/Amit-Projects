import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eyqyciyiehvnkqwptlve.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cXljaXlpZWh2bmtxd3B0bHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTk5ODIsImV4cCI6MjA3ODk3NTk4Mn0.Y3T7n-7QmA6aL-xoWCZEcX79L9S-Rjq-KyRilMTxx6E";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
