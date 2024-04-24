import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { MembersCount } from "@/components/MembersCount/MembersCount";
import { MembersList } from "@/components/MembersList/MembersList";
import { SearchMembersForm } from "@/components/MembersList/SearchMembersForm";
import { fetchMembers, fetchMembersCount } from "@/services/members";
import { Header } from "@/ui";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  searchParams: {
    query: string;
  };
};

export const metadata: Metadata = {
  title: "Members",
  description: "Check our company members",
};

export default async function MembersPage({ searchParams }: Props) {
  // throw new Error("Mieso!");
  // const membersCount = await fetchMembersCount();
  const query = searchParams.query || null;
  console.log({ query });

  return (
    <div>
      <Header>Members</Header>

      {/* <MembersCountClient /> */}

      {/* <ErrorBoundary fallback={<p>Error from counter...</p>}> */}
      <Suspense fallback={<p>Loading count...</p>}>
        <MembersCount />
      </Suspense>
      {/* </ErrorBoundary> */}

      <SearchMembersForm />

      {/* <ErrorBoundary fallback={<p>Error from list...</p>}> */}
      <Suspense fallback={<p>Loading list...</p>}>
        <MembersList query={query} />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
}
