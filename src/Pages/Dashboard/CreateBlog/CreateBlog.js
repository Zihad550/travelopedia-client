import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import img from "../../../images/create_blog.svg";
import SuccessfullySubmittedModal from "../../ShareExperience/SuccessfullySubmittedModal";

const CreateBlog = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [fieldData, setFieldData] = useState({});
  const [category, setCategory] = useState("Holidaymakers");
  const [src, setSrc] = useState(null);

  console.log(category);

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
    formData.append("category", category);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        data.error && alert(data.error);
        data.insertedId && setIsOpen(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const options = [
    { value: "Holidaymakers", id: 1 },
    { value: "Business Travellers", id: 2 },
    { value: "Backpackers & Adventure Travellers", id: 3 },
    { value: "Expedition Members", id: 4 },
    { value: "Long Term Travellers", id: 5 },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-2 md:mx-20">
        {/* img container */}
        <div className="hidden lg:block">
          <img className="w-full h-auto" src={img} alt="" />
        </div>

        {/* form container */}
        <div className="mb-6 md:my-auto text-center sm:text-left">
          <h2 className="text-3xl text-center my-3 mt-20 lg:mt-0">
            Share Your Experience
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col "
          >
            <div className="grid md:grid-cols-2 md:gap-4 ">
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

            {/* Date, Time, Location,  */}
            <div className="grid md:grid-cols-3 md:gap-4 md:mt-3">
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

            {/* Location , category , expense*/}
            <div className="grid md:grid-cols-2 md:gap-4 md:my-3">
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
            </div>

            {/* category */}
            <p className="mt-2"> Choose Category</p>
            <Listbox
              required
              value={category}
              name="category"
              onChange={(e) => setCategory(e)}
            >
              <div className="relative mt-1 ">
                <Listbox.Button className="relative w-full pl-3 pr-10 text-left bg-gray-300 py-3 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{category}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-black"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-amber-900 bg-amber-100"
                              : "text-gray-900"
                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={option.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {option.value}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

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

            {/* Blog img url */}
            <div className="mx-auto my-4 text-center">
              <label className="block mb-2" htmlFor="">
                Select an Image less then 200kb
              </label>
              <input
                className="form-input bg-gray-300 text-lg   rounded-md"
                placeholder="Blog Img"
                name="src"
                onChange={(e) => setSrc(e.target.files[0])}
                required
                type="file"
                accept="image/*"
              />
            </div>

            <button
              className=" bg-blue-500 text-white py-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* modal */}
      <SuccessfullySubmittedModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default CreateBlog;
