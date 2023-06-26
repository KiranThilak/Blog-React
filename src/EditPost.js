import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle" className="block font-medium mb-1">
              Title:
            </label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <label htmlFor="postBody" className="block font-medium mb-1 mt-4">
              Post:
            </label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              onClick={() => handleEdit(post.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <p className="text-gray-500">Well, that's disappointing.</p>
          <p className="mt-2">
            <Link to="/" className="text-blue-500 hover:underline">
              Visit Our Homepage
            </Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
