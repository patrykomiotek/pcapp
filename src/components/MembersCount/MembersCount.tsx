import { fetchMembersCount } from "@/services/members";

export const MembersCount = async () => {
  const membersCount = await fetchMembersCount();

  return (
    <div className="bg-slate-700 text-slate-200 text-2xl px-2">
      <p>{membersCount}</p>
    </div>
  );
};
