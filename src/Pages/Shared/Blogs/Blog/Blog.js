import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import BlogDetailModal from "../BlogDetailModal/BlogDetailModal";

const Blog = ({ blog }) => {
  // handle modal
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const { date, expense, location, rating, src, time, title, author } = blog;
  return (
    <>
      {/*  card */}
      <div className="my-5 shadow-md" onClick={openModal}>
        {/* card image */}
        <img className="w-full" src={src} alt="" />
        {/* card title */}
        <h2 className="md:text-3xl text-2xl pt-6 px-3 text-center">{title}</h2>

        {/* card body */}
        <div className="px-3 my-4">
          {/* card info */}
          <div className="flex justify-between  mb-2">
            <div>
              <p className="text-xl">Location: {location}</p>
              <p>
                {date}
                <span className="ml-1">at: {time}</span>
              </p>
            </div>
            <div>
              <p>Total Expense: {expense} $</p>
              <p>
                Rating:
                {[...Array(parseInt(rating))].map((rate) => (
                  <>
                    <StarIcon
                      key={rate}
                      className="text-orange-300  h-5 w-5 flex-shrink-0 inline-block"
                      aria-hidden="true"
                    />
                  </>
                ))}
              </p>
            </div>
          </div>
          {/* card author information and contact */}
          <div className="flex justify-between border-t-slate-500 border-t-2 pt-3">
            <p>
              <FontAwesomeIcon className="mr-1" icon={faUser} /> Author:{" "}
              {author}
            </p>
            <div className="flex justify-between w-32">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
      </div>

      {/* blog detail modal */}
      <BlogDetailModal isOpen={isOpen} setIsOpen={setIsOpen} blog={blog} />
    </>
  );
};

export default Blog;
