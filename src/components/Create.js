import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="p-4 shadow-md rounded-md text-left max-w-lg m-auto">
      <div className="text-2xl font-semibold text-green-500 text-center">
        Add a New Blog
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block mt-4">
          <span className="text-gray-700">Blog title:</span>

          <input
            placeholder="My first blog"
            className="mt-2 p-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="block text-left mt-4">
          <span className="text-gray-700">Blog body:</span>
          <textarea
            className="mt-2 p-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            rows="3"
            placeholder="Enter some long form content."
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>

        <label className="block text-left mt-4">
          <span className="text-gray-700">Blog author:</span>
          <select
            className="form-select block mt-2 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
        </label>
        <div className="mt-10 mb-4 text-center">
          {!isPending && (
            <button className="p-3 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">
              <div className="flex">
                <i className="fas fa-plus mt-1 mr-3"></i>
                Add Blog
              </div>
            </button>
          )}
          {isPending && (
            <button
              className="p-3 font-medium text-white bg-pink-500 rounded  transition duration-300"
              disabled
            >
              <div className="flex">
                <svg
                  className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-4 w-4 mt-1 mr-3"
                  viewBox="0 0 24 24"
                ></svg>
                Add Blog
              </div>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
