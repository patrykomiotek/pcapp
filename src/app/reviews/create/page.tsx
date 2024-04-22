import { sendForm } from "./actions";
const CreateReviewPage = () => {
  return (
    <div className="container">
      <form action={sendForm}>
        <div>
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
