import { z } from "zod";

export type ReviewDto = {
  id: string;
  fields: {
    content: string;
    rank: number;
  };
};

export const createReviewSchema = z.object({
  content: z.string().min(2, "Content is required"),
  rank: z.number().min(1, "Rank is min 1").max(5, "Rank is max 5"),
});

// export type CreateReviewDto = ReviewDto["fields"];
export type CreateReviewDto = z.infer<typeof createReviewSchema>;

export type ReviewsResponse = {
  records: ReviewDto[];
};
