import React from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="w-11/12 mx-auto h-[425px] ">
      {blogs.map((blog) => (
        <div key={blog.id} className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title font-semibold ">{blog.title}</div>
          <div className="collapse-content text-sm">{blog.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
