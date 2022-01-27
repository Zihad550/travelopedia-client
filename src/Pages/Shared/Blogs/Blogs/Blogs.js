import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://tranquil-springs-69154.herokuapp.com/blogs?page=${currentPage}&&size=${size}&&status=approved`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.count);
        setBlogs(data.blogs);
        setPageCount(Math.ceil(data.count / size));
      });
  }, [currentPage]);
  return (
    <div>
      <h2 className="text-center text-5xl my-12 bg-slate-400 py-6 ">Blogs</h2>
      <div className="grid md:mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-5">
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
