import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [reload, setReload] = useState(false);
  const size = 10;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard/approve" || reload) {
      setReload(false);
      fetch(
        `https://tranquil-springs-69154.herokuapp.com/blogs?page=${currentPage}&&size=${size}&&status=unApproved`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.count);
          setBlogs(data.blogs);
          setPageCount(Math.ceil(data.count / size));
        });
    } else {
      fetch(
        `https://tranquil-springs-69154.herokuapp.com/blogs?page=${currentPage}&&size=${size}&&status=approved`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.count);
          setBlogs(data.blogs);
          setPageCount(Math.ceil(data.count / size));
        });
    }
  }, [currentPage, reload, location.pathname]);

  console.log(location.pathname === "/dashboard/approve");
  return (
    <>
      <h2 className="text-center md:text-5xl text-3xl bg-slate-400 py-5 mb-2">
        Manage Blogs
      </h2>

      <div>
        <div className="grid md:mx-4 grid-cols-1 lg:mx-56 lg:grid-cols-3  gap-3 ">
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog._id} setReload={setReload} />
          ))}
        </div>
        {/* pagination */}
        <div className="flex align-center justify-center w-full ">
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
    </>
  );
};

export default Blogs;
