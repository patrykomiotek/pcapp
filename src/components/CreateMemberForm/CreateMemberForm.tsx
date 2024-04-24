"use client";

import { FormEventHandler, useRef, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { sendForm } from "@/app/(public)/members/create/actions";
import { createValidationSchema, type CreateMemberDto } from "@/types/Member";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { useRouter } from "next/navigation";

export const CreateMemberForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setTransition] = useTransition();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateMemberDto>({
    resolver: zodResolver(createValidationSchema),
    // reValidateMode: "onSubmit",
  });

  const handleClientForm: SubmitHandler<CreateMemberDto> = async (data) => {
    console.log({ data });
    // "use server";
    // event.preventDefault();
    // if (formRef.current) {
    //   const data = new FormData(formRef.current);
    //   const result = await sendForm(data);
    //   console.log(result);
    // }
    // Flow Client (validate) -> Server (validate) -> Response (JSON)
    const result = await sendForm(data);
    if (result.status === "SUCCESS") {
      toast.success("Member created");
      setTransition(() => push("/members"));
    }
  };

  return (
    <>
      {isSubmitting && <p>Submitting...</p>}
      {isPending && <p>Redirecting...</p>}
      <form ref={formRef} onSubmit={handleSubmit(handleClientForm)}>
        <Input
          label="Name"
          {...register("name")}
          error={errors.name}
          disabled={isSubmitting}
        />
        <Input
          label="Role"
          {...register("role")}
          error={errors.role}
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          className="mt-4"
          label="Send"
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};
