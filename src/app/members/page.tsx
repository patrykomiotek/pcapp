import { fetchMembers } from "@/services/members";
import { Header } from "@/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Members",
  description: "Check our company members",
};

export default async function MembersPage() {
  const data = await fetchMembers();

  return (
    <div>
      <Header>Members</Header>
      <div>
        {data.map((member) => (
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
    </div>
  );
}
