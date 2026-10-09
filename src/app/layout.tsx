import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "You're Invited | Patel Baby Shower",
  description: "Join Priyanka and Darshit for a joyful baby shower on Sunday, December 13, 2026.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: { title: "Patel Baby Shower", description: "A new chapter, a bigger love. Please join us!", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fdeadb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&family=Great+Vibes&display=swap"
        />
        <noscript>
          <style>{`.reveal,.pop,.hero .sheet-arch{opacity:1!important;transform:none!important}.nav{opacity:1!important;transform:none!important}.intro{display:none!important}.shimmer{animation:none}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
