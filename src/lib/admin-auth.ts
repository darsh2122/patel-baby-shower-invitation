import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
export async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const expected = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!user || !expected || user.email?.toLowerCase() !== expected) redirect("/admin/login");
  return user;
}
