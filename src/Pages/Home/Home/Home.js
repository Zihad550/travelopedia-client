import React from "react";
import Blogs from "../../Shared/Blogs/Blogs/Blogs";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div>
      <Banner />
      <SideBar />
      <Blogs />
    </div>
  );
};

export default Home;
