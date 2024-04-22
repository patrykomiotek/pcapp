"use client";

import { useApi } from "@/hooks/useApi";
import { fetchReviews } from "@/services/reviews";
import { ReviewDto, ReviewsResponse } from "@/types/Review";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// const reviews: ReviewDto[] = [
//   { id: "1234", fields: { content: "one two", rank: 4 } },
// ];

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const ReviewList = () => {
  // const { data, isError, isLoading, refetch } = useApi(fetchReviews);
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  // const [reviews, setReviews] = useState<ReviewDto[]>([]);

  // useEffect(() => {
  //   // fetch("https://api.airtable.com/v0/appiuwe0WQC3O59Tq/reviews", {
  //   //   headers: {
  //   //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //   //   },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => setReviews(data.records));

  //   const loadData = async () => {
  //     //   const response = await fetch(`${BASE_URL}/reviews`, {
  //     //     headers: {
  //     //       Authorization: `Bearer ${API_TOKEN}`,
  //     //     },
  //     //   });
  //     //   const data: ReviewsResponse = await response.json();
  //     //   setReviews(data.records);

  //     const data = await fetchReviews();
  //     setReviews(data);
  //   };

  //   loadData();
  // }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="py-2 px-4 bg-blue-600 text-white"
      >
        Refetch
      </button>
      {data!.map((review) => (
        <div key={review.id}>
          {review.fields.content} | {review.fields.rank}
        </div>
      ))}
    </div>
  );
};
