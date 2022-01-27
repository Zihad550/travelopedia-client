import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const Blog = ({ blog, setReload }) => {
  const {
    date,
    expense,
    location,
    rating,
    src,
    time,
    title,
    author,
    _id,
    image,
    status,
  } = blog;

  const handleDelete = () => {
    if (window.confirm("Are you sure")) {
      fetch(`http://localhost:8000/blogs?id=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          data.deletedCount > 0 && alert("successfully deleted");
          setReload(true);
        });
    }
  };

  const handleApprove = () => {
    fetch(`http://localhost:8000/blogs?id=${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount &&
          alert(
            "Approvement successful. Visit the dashboard to see all the approved blogs."
          );
        setReload(true);
      });
  };

  return (
    <>
      {/*  card */}
      <div className="mb-5 shadow-md">
        {/* card image */}
        {src ? (
          <img className="w-full" src={src} alt="" />
        ) : (
          <img src={`data:image/png;base64,${image}`} alt="" />
        )}
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

        {/* delete and update */}
        <div className="flex py-2">
          {status ? (
            <button disabled className="w-full bg-green-500">
              Approved
            </button>
          ) : (
            <button
              onClick={handleApprove}
              className="w-full bg-yellow-400 py-2 hover:bg-yellow-600 hover:text-white"
            >
              Approve
            </button>
          )}
          <button
            onClick={handleDelete}
            className="w-full bg-red-400 hover:bg-red-600 py-2 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
