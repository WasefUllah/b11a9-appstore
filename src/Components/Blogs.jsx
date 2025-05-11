import React from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="w-11/12 mx-auto py-10">

      <title>AppStore | Blogs</title>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="collapse bg-base-100 border border-base-300 rounded-md shadow-md"
          >
            <input
              type="radio"
              name="my-accordion-1"
              id={`blog-${blog.id}`}
              defaultChecked
              className="peer"
            />
            <div className="collapse-title text-xl font-semibold peer-checked:text-green-600">
              {blog.title}
            </div>
            <div className="collapse-content text-sm peer-checked:bg-gray-100 p-4">
              {blog.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
