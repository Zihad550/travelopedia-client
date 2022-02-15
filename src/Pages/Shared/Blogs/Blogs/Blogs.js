import React from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ blogs, pageCount, currentPage, setCurrentPage }) => {
  return (
    <div>
      <h2 className="text-center text-5xl md:my-12 mt-10 bg-slate-400 py-6 ">
        Blogs
      </h2>
      <div className="grid md:mx-10 grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:mx-56 sm:gap-x-5 mx-8">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id} />
        ))}
      </div>
      {/* pagination */}
      <div className="flex align-center justify-center w-full mb-3">
        <div className="">
          {[...Array(pageCount).keys()].map((n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n)}
              className={
                n === currentPage
                  ? "bg-blue-500 text-white rounded-lg w-10 h-10 mr-2"
                  : "bg-slate-700 text-white rounded-lg w-10 h-10 mr-2"
              }
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
