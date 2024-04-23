"use client";

import { FormEventHandler, useRef } from "react";
import { sendForm } from "./actions";

const CreateReviewPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendFormAction: FormEventHandler = async (event) => {
    // "use server";
    event.preventDefault();

    if (formRef.current) {
      const data = new FormData(formRef.current);

      const result = await sendForm(data);
      console.log(result);
    }
  };

  return (
    <div className="container">
      {/* <form action={sendFormAction}> */}
      <form ref={formRef} onSubmit={sendFormAction}>
        <div className="block mb-4">
          <label htmlFor="rank">Rank</label>
          <input
            id="rank"
            name="rank"
            className="border-2 border-slate-900 ml-2"
          />
        </div>
        <div className="block mb-4">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className="border-2 border-slate-900 ml-2"
          />
        </div>
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateReviewPage;
