import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = { title: "Host dashboard | Patel Baby Shower", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="adm">{children}</div>;
}
