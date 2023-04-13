
import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.apiURL, config.public.apiKey);

    return {
        supabase
    }
    
}

export default useSupabase;