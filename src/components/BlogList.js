import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list mt-5">
      <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="border-b border-gray-200 p-5 hover:shadow"
          key={blog.id}
        >
          <Link to={`blogs/${blog.id}`}>
            <h2 className="text-xl text-pink-500 mb-2">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
