import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        className="bg-transparent focus:outline-none dark:placeholder-white/75"
        rows="4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you want to talk about?"
      />
      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <button
        type="submit"
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        disabled={!input.trim() && !photoUrl.trim()}
      >
        Add Post
      </button>
    </form>
  );
};

export default Form;
