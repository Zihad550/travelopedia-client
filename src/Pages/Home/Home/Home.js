import React, { useEffect, useState } from "react";
import Blogs from "../../Shared/Blogs/Blogs/Blogs";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/SideBar";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [applyFilter, setApplyFilter] = useState(false);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://tranquil-springs-69154.herokuapp.com/blogs?page=${currentPage}&&size=${size}&&status=approved&&filter=${filter}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.count);
        setBlogs(data.blogs);
        setPageCount(Math.ceil(data.count / size));
      });
  }, [currentPage, filter]);
  return (
    <div>
      <Header />
      <Banner />
      <SideBar setFilter={setFilter} setApplyFilter={setApplyFilter} />
      <Blogs
        blogs={blogs}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Sponsors />
    </div>
  );
};

export default Home;
