import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { MembersCount } from "@/components/MembersCount/MembersCount";
import { MembersList } from "@/components/MembersList/MembersList";
import { fetchMembers, fetchMembersCount } from "@/services/members";
import { Header } from "@/ui";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Members",
  description: "Check our company members",
};

export default async function MembersPage() {
  // throw new Error("Mieso!");
  // const membersCount = await fetchMembersCount();

  return (
    <div>
      <Header>Members</Header>

      {/* <MembersCountClient /> */}

      {/* <ErrorBoundary fallback={<p>Error from counter...</p>}> */}
      <Suspense fallback={<p>Loading count...</p>}>
        <MembersCount />
      </Suspense>
      {/* </ErrorBoundary> */}

      {/* <ErrorBoundary fallback={<p>Error from list...</p>}> */}
      <Suspense fallback={<p>Loading list...</p>}>
        <MembersList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
}
