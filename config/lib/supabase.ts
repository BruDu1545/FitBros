import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gjfaafyougudcxtpewhv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZmFhZnlvdWd1ZGN4dHBld2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTM5MzMsImV4cCI6MjA3NDQ4OTkzM30.Ktw_lLfn5UXlUfhKlFM8d7KuFK_FyUq-l69y4_5R9JA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, 
  },
});
