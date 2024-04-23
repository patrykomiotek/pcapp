import { ZodError, z } from "zod";
import { MembersResponse, validationSchema } from "@/types/Member";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const fetchMembers = async () => {
  // await fetch('/api/reviews) -> fetch(`${BASE_URL}/reviews`
  const response = await fetch(`${BASE_URL}/members`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data: MembersResponse = await response.json();
  // console.log({ data });

  let result;
  try {
    result = validationSchema.parse(data); // safeParse
    // console.log("result in success: ", result);
    return result.records;
  } catch (error) {
    if (error instanceof ZodError) {
      // console.log("result in error: ", result);
      console.log("Error: ", error.errors);
    }
    return [];
  }

  // return data.records;
};
