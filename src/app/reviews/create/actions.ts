"use server";

import { createReview } from "@/services/reviews";
import { CreateReviewDto } from "@/types/Review";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const sendForm = async (data: FormData) => {
  const review: CreateReviewDto = {
    rank: parseInt(data.get("rank") as string, 10),
    content: data.get("content") as string,
  };

  try {
    await createReview(review);
    console.log("success!");
  } catch (err) {
    console.error("createReviewError: ", err);
  }

  // revalidatePath("/reviews");
  redirect("/reviews");
  // return {}
};
