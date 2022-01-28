import React from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white" sx={{ py: 3 }}>
      <div className="md:mx-40 py-10 text-center md:text-left">
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 flex flex-col md:flex-row justify-between md:gap-y-10 lg:gap-y-0">
          <div>
            <img className="w-full h-auto" src={logo} alt="" />
          </div>
          <div className="mt-5 md:mt-0 mb-5 md:mb-0">
            <h4 className="text-3xl mb-1">Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Share Your Experience</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mb-5 md:mb-0">
            <h4 className="text-3xl md:text-2xl lg:text-3xl mb-1">
              {" "}
              BOOKS AND COURSES
            </h4>
            <ul>
              <li>
                <a href="#">Ten Years a Nomad</a>
              </li>
              <li>
                <a href="#">How to Travel the World</a>
              </li>
              <li>
                <a href="#">Destination Guidebooks</a>
              </li>
              <li>
                <a href="#">Blogging Mentorship</a>
              </li>
              <li>
                <a href="#">Writing Mentorship</a>
              </li>
            </ul>
          </div>
          <div className="mb-5 md:mb-0">
            <h4 className="text-3xl mb-1 md:text-2xl lg:text-3xl">
              {" "}
              TRAVEL TIPS
            </h4>
            <ul>
              <li>
                <a href="#">Start Here</a>
              </li>
              <li>
                <a href="#">Travel Blog</a>
              </li>
              <li>
                <a href="#">Destination Guides</a>
              </li>
              <li>
                <a href="#">COVID Travel Advice</a>
              </li>
              <li>
                <a href="#">Teaching Overseas</a>
              </li>
              <li>
                <a href="#">Travel Hacking</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
