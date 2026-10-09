import { z } from "zod";
export const rsvpSchema = z.object({
  householdName: z.string().trim().min(2).max(120),
  contactName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  attending: z.enum(["yes", "no"]),
  guestCount: z.number().int().min(0).max(20),
  dietaryNotes: z.string().trim().max(500).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
  website: z.string().max(0).optional().default(""), // honeypot field
}).superRefine((v, ctx) => {
  if (v.attending === "yes" && v.guestCount < 1) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["guestCount"], message: "Please include at least one attendee." });
  if (v.attending === "no" && v.guestCount !== 0) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["guestCount"], message: "Guest count must be zero if you cannot attend." });
});
export type RSVPInput = z.infer<typeof rsvpSchema>;
export const messageSchema = z.object({ name: z.string().trim().min(2).max(100), message: z.string().trim().min(2).max(500) });
