import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import Spinner from "./Spinner";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="mt-5">
      {isPending && <Spinner />}
      {error && (
        <div className="text-xl font-semibold text-red-500 text-center">
          {error}
        </div>
      )}
      {blog && (
        <article>
          <h2 className="text-xl text-pink-500 font-semibold mb-2">
            {blog.title}
          </h2>
          <p className="mb-2">Written by {blog.author}</p>
          <div className="mt-5 mb-5 text-justify"> {blog.body} </div>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-sm text-white font-bold py-2 px-2 rounded"
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
