import { ZodError, z } from "zod";
import {
  CreateMemberDto,
  MemberDto,
  MembersResponse,
  validationSchema,
} from "@/types/Member";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const fetchMembers = async (query: string | null) => {
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

    if (query) {
      return result.records.filter((elem) =>
        elem.fields.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
    }
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

export const fetchMembersCount = async () => {
  // throw new Error("!!!");
  const response = await fetch(`${BASE_URL}/members`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data: MembersResponse = await response.json();

  return data.records.length;
};

export const fetchMember = async (publicId: MemberDto["id"]) => {
  const response = await fetch(`${BASE_URL}/members/${publicId}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data: MemberDto = await response.json();

  return data;
};

export const createMember = async (data: CreateMemberDto) => {
  // TODO: you can use axios
  // return api.post('/members', parseAirtable(data))
  return await fetch(`${BASE_URL}/members`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ records: [{ fields: data }] }), // TODO: refactor
  });
};
