"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendForm } from "@/app/(public)/reviews/create/actions";
import { FormEventHandler, useRef } from "react";
import { createReviewSchema, type CreateReviewDto } from "@/types/Review";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";

export const CreateReviewForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createReviewSchema),
    // reValidateMode: "onSubmit",
  });

  const handleClientForm: SubmitHandler<CreateReviewDto> = async (data) => {
    // "use server";
    // event.preventDefault();
    // if (formRef.current) {
    //   const data = new FormData(formRef.current);
    //   const result = await sendForm(data);
    //   console.log(result);
    // }
    const result = await sendForm(data);
  };

  return (
    <>
      {isSubmitting && <p>Submitting...</p>}
      <form ref={formRef} onSubmit={handleSubmit(handleClientForm)}>
        <Input
          label="Rank"
          {...register("rank", { valueAsNumber: true })}
          type="number"
          defaultValue={0}
          error={errors.rank}
          disabled={isSubmitting}
        />
        <Textarea
          label="Content"
          {...register("content")}
          error={errors.content}
          disabled={isSubmitting}
        />
        <Button type="submit" label="Send" disabled={isSubmitting} />
      </form>
    </>
  );
};
