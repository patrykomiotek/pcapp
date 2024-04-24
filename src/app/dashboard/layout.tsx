import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
  stats,
  users,
}: Readonly<{
  children: React.ReactNode;
  stats: React.ReactNode;
  users: React.ReactNode;
}>) {
  return (
    <div className="p-2">
      <Link href="/" className="text-sm text-blue-600 underline pl-2">
        Back to app
      </Link>
      {children}
      <div className="flex">
        <div className="bg-slate-400 w-6/12 p-2 m-2">{stats}</div>
        <div className="bg-slate-400 w-6/12 p-2 m-2">{users}</div>
      </div>
    </div>
  );
}
