import { CreateReviewDto, ReviewsResponse } from "@/types/Review";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// TODO: ROUTE handler
export const fetchReviews = async () => {
  // await fetch('/api/reviews) -> fetch(`${BASE_URL}/reviews`
  const response = await fetch(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data: ReviewsResponse = await response.json();

  return data.records;
};

export const createReview = async (data: CreateReviewDto) => {
  return await fetch(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ records: [data] }),
  });
};
