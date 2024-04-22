import { ReviewList } from "@/components/ReviewsList";
import { Header } from "@/ui";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ReviewsPage() {
  // notFound();

  return (
    <div>
      <Header>Reviews</Header>

      <div className="my-2">
        <Link href="/reviews/create" className="text-blue-600">
          Create review
        </Link>
      </div>

      <ReviewList />
    </div>
  );
}
