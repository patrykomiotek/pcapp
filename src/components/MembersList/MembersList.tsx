import { fetchMembers } from "@/services/members";
import Link from "next/link";

type Props = {
  query: string | null;
};

export const MembersList = async ({ query }: Props) => {
  const members = await fetchMembers(query);

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
