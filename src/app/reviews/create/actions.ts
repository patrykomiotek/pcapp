"use server";

import { createReview } from "@/services/reviews";
import { CreateReviewDto, createReviewSchema } from "@/types/Review";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const sendForm = async (data: FormData) => {
  const review: CreateReviewDto = {
    rank: parseInt(data.get("rank") as string, 10),
    content: data.get("content") as string,
  };

  const validationResult = createReviewSchema.safeParse(review);
  if (validationResult.success) {
    try {
      await createReview(review);
      console.log("success!");
    } catch (err) {
      console.error("createReviewError: ", err);
    }

    // revalidatePath("/reviews");
    redirect("/reviews");
    // return {}
  } else {
    console.error(validationResult.error);
    return { status: "Validation error" };
  }

  return null;
};
