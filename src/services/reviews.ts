import { ReviewsResponse } from "@/types/Review";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const fetchReviews = async () => {
  const response = await fetch(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data: ReviewsResponse = await response.json();

  return data.records;
};
