import { createClient } from "@supabase/supabase-js";

/* export const cliente = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_AON_PUBLIC
); */

export const cliente = createClient(
  'https://kxepftivcozwnzwgotma.supabase.co',
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZXBmdGl2Y296d256d2dvdG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg3NjYyNTgsImV4cCI6MTk3NDM0MjI1OH0.dlggVMsJtgyhmV_aynd16QpC6BN_ETDOBfMMrEDxAWw"
);
