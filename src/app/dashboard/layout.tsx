import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
  stats,
}: Readonly<{
  children: React.ReactNode;
  stats: React.ReactNode;
}>) {
  console.log({ stats });

  return (
    <div>
      {children}
      <div className="flex">
        <div className="bg-slate-400 w-6/12 p-2 m-2">{stats}</div>
        <div className="bg-slate-400 w-6/12 p-2 m-2">v</div>
      </div>
    </div>
  );
}
