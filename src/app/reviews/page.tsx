import { ReviewList } from "@/components/ReviewsList";
import { Header } from "@/ui";
import { notFound } from "next/navigation";

export default function ReviewsPage() {
  // notFound();

  return (
    <div>
      <Header>Reviews</Header>
      <ReviewList />
    </div>
  );
}
