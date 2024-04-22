"use client";

import { fetchReviews } from "@/services/reviews";
import { ReviewDto, ReviewsResponse } from "@/types/Review";
import { useEffect, useState } from "react";

// const reviews: ReviewDto[] = [
//   { id: "1234", fields: { content: "one two", rank: 4 } },
// ];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const ReviewList = () => {
  const [reviews, setReviews] = useState<ReviewDto[]>([]);

  useEffect(() => {
    // fetch("https://api.airtable.com/v0/appiuwe0WQC3O59Tq/reviews", {
    //   headers: {
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setReviews(data.records));

    const loadData = async () => {
      //   const response = await fetch(`${BASE_URL}/reviews`, {
      //     headers: {
      //       Authorization: `Bearer ${API_TOKEN}`,
      //     },
      //   });
      //   const data: ReviewsResponse = await response.json();
      //   setReviews(data.records);

      const data = await fetchReviews();
      setReviews(data);
    };

    loadData();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          {review.fields.content} | {review.fields.rank}
        </div>
      ))}
    </div>
  );
};
