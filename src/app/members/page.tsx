import { fetchMembers } from "@/services/members";
import { Header } from "@/ui";

export default async function MembersPage() {
  const data = await fetchMembers();

  return (
    <div>
      <Header>Members</Header>
      <div>
        {data.map((member) => (
          <div key={member.id}>
            <p>
              {member.fields.name}, {member.fields.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
