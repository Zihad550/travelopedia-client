import React from "react";
import Blogs from "../../Shared/Blogs/Blogs/Blogs";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SideBar />
      <Blogs />
    </div>
  );
};

export default Home;
