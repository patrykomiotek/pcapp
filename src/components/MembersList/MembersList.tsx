import { fetchMembers } from "@/services/members";
import Link from "next/link";

export const MembersList = async () => {
  const members = await fetchMembers();

  return (
    <div>
      {members.map((member) => (
        <div key={member.id}>
          <p>
            <Link href={`/members/${member.id}`} className="text-blue-700">
              {member.fields.name}
            </Link>
            , {member.fields.role}
          </p>
        </div>
      ))}
    </div>
  );
};
