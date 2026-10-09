import { describe, it, expect } from "vitest";
import { supabase } from "@/integrations/supabase/client";

describe("supabase client", () => {
  it("creates client instance without required env vars in test runtime", () => {
    expect(supabase).toBeDefined();
  });
});
