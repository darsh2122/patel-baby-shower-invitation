"use server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";

function refresh() {
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function approveMessage(id: string) {
  await requireAdmin();
  await createAdminClient().from("guest_messages").update({ approved: true }).eq("id", id);
  refresh();
}

export async function hideMessage(id: string) {
  await requireAdmin();
  await createAdminClient().from("guest_messages").update({ approved: false }).eq("id", id);
  refresh();
}

export async function deleteMessage(id: string) {
  await requireAdmin();
  await createAdminClient().from("guest_messages").delete().eq("id", id);
  refresh();
}
