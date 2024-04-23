import { fetchMember } from "@/services/members";
import { MemberDto } from "@/types/Member";
import { Header } from "@/ui";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

// props = {
//   params
//   searchParams
// }

type Props = {
  params: {
    publicId: string;
  };
};

// export const metadata: Metadata = {
//   title: "Member",
//   description: "Check our company members",
// };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const publicId = params.publicId;

  // fetch data
  const member = await fetchMember(publicId);
  // console.log({ member: member.error });
  if (member.error) {
    return {
      title: `Member not found`,
    };
  }
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Member ${member.fields.name}`,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export async function generateStaticParams() {
  return [{ publicId: "recTOQlIcgK7fq0UB" }];
}

export default async function MemberPage({ params }: Props) {
  const publicId = params.publicId;
  let member: MemberDto | undefined;
  try {
    member = await fetchMember(publicId);
    if (member.error === "NOT_FOUND") {
      notFound();
    }
  } catch {
    notFound();
  }

  return (
    <div>
      <Header>
        Member <span className="text-sm text-slate-700">{member.id}</span>
      </Header>
      <p>
        {member.fields.name} {member.fields.role}
      </p>
    </div>
  );
}
