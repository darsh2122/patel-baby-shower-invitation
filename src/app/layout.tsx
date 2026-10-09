import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "A Little One Is on the Way | Patel Baby Shower", description: "Join Priyanka and Darshit for a joyful baby shower on December 13, 2026.", metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"), openGraph: { title: "Patel Baby Shower", description: "A little celebration, a lot of love.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
