"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendForm } from "@/app/reviews/create/actions";
import { FormEventHandler, useRef } from "react";
import { createReviewSchema, type CreateReviewDto } from "@/types/Review";
import { Button } from "@/ui/Button";

export const CreateReviewForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form ref={formRef} onSubmit={handleSubmit(handleClientForm)}>
      <div className="block mb-4">
        <label htmlFor="rank">Rank</label>
        <input
          id="rank"
          type="number"
          className="border-2 border-slate-900 ml-2"
          defaultValue={0}
          {...register("rank", { valueAsNumber: true })}
        />
        {errors.rank && <p className="text-red-400">{errors.rank.message}</p>}
      </div>
      <div className="block mb-4">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          {...register("content")}
          className="border-2 border-slate-900 ml-2"
        />
        {errors.content && (
          <p className="text-red-400">{errors.content.message}</p>
        )}
      </div>
      {/* <button type="submit" className="py-2 px-4 bg-blue-600 text-white">
        Send
      </button> */}
      <Button type="submit" label="Send" />
    </form>
  );
};
