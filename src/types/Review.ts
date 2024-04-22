export type ReviewDto = {
  id: string;
  fields: {
    content: string;
    rank: number;
  };
};

export type ReviewsResponse = {
  records: ReviewDto[];
};
