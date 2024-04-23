import { z } from "zod";

// export type MemberDto = {
//   id: string;
//   fields: {
//     name: string;
//     role: string;
//   };
// };

export const validationSchema = z.object({
  records: z.array(
    z.object({
      id: z.string(),
      fields: z.object({
        name: z.string(),
        role: z.string(),
      }),
    })
  ),
});

// export type MembersResponse = {
//   records: MemberDto[];
// };

export type MembersResponse = z.infer<typeof validationSchema>;
export type MemberDto = MembersResponse["records"];
