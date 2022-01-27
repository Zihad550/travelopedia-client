import React, { useState } from "react";
import Header from "../Shared/Header/Header";
import SuccessfullySubmittedModal from "./SuccessfullySubmittedModal";

const ShareExperience = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [fieldData, setFieldData] = useState({});
  const [src, setSrc] = useState(null);

  console.log(fieldData);

  // form functionality
  const handleFieldData = (e) => {
    setIsOpen(false);
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...fieldData };
    newData[field] = value;
    setFieldData(newData);
  };
  const handleSubmit = (e) => {
    setIsOpen(false);
    e.preventDefault();
    if (!src && fieldData === []) {
      return;
    }
    const formData = new FormData();
    formData.append("src", src);
    formData.append("title", fieldData.title);
    formData.append("date", fieldData.date);
    formData.append("time", fieldData.time);
    formData.append("location", fieldData.location);
    formData.append("expense", fieldData.expense);
    formData.append("rating", fieldData.rating);
    formData.append("description", fieldData.description);
    formData.append("author", fieldData.author);
    formData.append("authorEmail", fieldData.authorEmail);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId && setIsOpen(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <>
      <Header />
      <div className="mb-6">
        <h2 className="text-3xl text-center my-3 ">Share Your Experience</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col mx-4"
        >
          {/* name */}
          <div>
            <label className="" htmlFor="">
              Enter your name:
            </label>
            <input
              className="form-input bg-gray-300 text-lg  w-full rounded-md"
              placeholder="Name"
              type="text"
              name="author"
              onBlur={handleFieldData}
              required
            />
          </div>
          {/* email */}
          <div>
            <label className="" htmlFor="">
              Enter your email:
            </label>
            <input
              className="form-input bg-gray-300 text-lg  w-full rounded-md"
              placeholder="Email"
              type="email"
              name="authorEmail"
              onBlur={handleFieldData}
              required
            />
          </div>

          {/* Blog Title */}
          <div>
            <label className="" htmlFor="">
              Blog Title
            </label>
            <input
              className="form-input bg-gray-300 text-lg  w-full rounded-md"
              placeholder="Blog Title"
              type="text"
              name="title"
              onBlur={handleFieldData}
              required
            />
          </div>

          {/* Blog img url */}
          <div>
            <label className="" htmlFor="">
              Enter the image link
            </label>
            <input
              className="form-input bg-gray-300 text-lg  w-full rounded-md"
              placeholder="Blog Img"
              name="src"
              onChange={(e) => setSrc(e.target.files[0])}
              required
              type="file"
              accept="image/*"
            />
          </div>

          {/* Date, Time, Location, Expense, rating */}
          <div>
            {/* data field */}
            <div>
              <label className="" htmlFor="">
                Date
              </label>
              <input
                className="form-input bg-gray-300 text-lg  w-full rounded-md"
                placeholder="Blog Title"
                type="date"
                name="date"
                onChange={handleFieldData}
                required
              />
            </div>
            {/* time field */}
            <div>
              <label className="" htmlFor="">
                Time
              </label>
              <input
                className="form-input bg-gray-300 text-lg  w-full rounded-md"
                placeholder="Blog Title"
                type="time"
                name="time"
                onChange={handleFieldData}
                required
              />
            </div>
            {/* Location */}
            <div>
              <label className="" htmlFor="">
                Location
              </label>
              <input
                className="form-input bg-gray-300 text-lg  w-full rounded-md"
                placeholder="Location"
                type="text"
                name="location"
                onBlur={handleFieldData}
                required
              />
            </div>
            {/* Expense */}
            <div>
              <label className="" htmlFor="">
                Expense
              </label>
              <input
                className="form-input bg-gray-300 text-lg  w-full rounded-md"
                placeholder="Expense"
                type="number"
                name="expense"
                onChange={handleFieldData}
                required
              />
            </div>
            {/* rating */}
            <div>
              <label className="" htmlFor="">
                Rating
              </label>
              <input
                className="form-input bg-gray-300 text-lg  w-full rounded-md"
                placeholder="Rating"
                type="number"
                name="rating"
                max="6"
                min="0"
                onChange={handleFieldData}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="" htmlFor="">
              Description
            </label>
            <textarea
              className="form-input bg-gray-300 text-lg  w-full rounded-md"
              placeholder="Description"
              rows="3"
              type="text"
              name="description"
              onBlur={handleFieldData}
              required
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* modal */}
      <SuccessfullySubmittedModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ShareExperience;
