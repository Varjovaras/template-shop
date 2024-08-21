import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://coujyoategiptihhbqja.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdWp5b2F0ZWdpcHRpaGhicWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNjU2NzYsImV4cCI6MjAzOTg0MTY3Nn0.zR133N4ERm2zqKt7RUyI1O1PFv2zisXnI1Ri3h5Nric",
);
