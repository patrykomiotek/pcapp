"use server";

import { createMember } from "@/services/members";
import { CreateMemberDto, createValidationSchema } from "@/types/Member";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const sendForm = async (data: CreateMemberDto) => {
  const validationResult = createValidationSchema.safeParse(data);
  if (validationResult.success) {
    try {
      await createMember(data);
      console.log("success!");
    } catch (err) {
      console.error("createMemberError: ", err);
    }

    revalidatePath("/members");
    // revalidateTag();
    // redirect("/members");
    // return {}

    return { status: "SUCCESS" };
  } else {
    console.error(validationResult.error);
    return { status: "ERROR" };
  }
};
