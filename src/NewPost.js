import React from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="NewPost">
      <h2 className="text-2xl font-bold mb-4">New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle" className="block mb-2 font-medium">
          Title:
        </label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <label htmlFor="postBody" className="block mb-2 font-medium">
          Post:
        </label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
