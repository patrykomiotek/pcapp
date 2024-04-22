export type ReviewDto = {
  id: string;
  fields: {
    content: string;
    rank: number;
  };
};

export type CreateReviewDto = ReviewDto["fields"];

export type ReviewsResponse = {
  records: ReviewDto[];
};
