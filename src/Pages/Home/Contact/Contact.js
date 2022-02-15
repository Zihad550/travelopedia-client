import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import src from "../../../images/profile.png";
import Header from "../../Shared/Header/Header";
import Title from "../../Shared/Title/Title";

const Contact = () => {
  const [data, setData] = useState({});
  console.log(data);
  const handleSendMessage = (e) => {
    e.preventDefault();
  };

  const handleFormData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  return (
    <div>
      <Header />
      <Title>Contact Us</Title>
      <div className="grid grid-cols-3 gap-2 mx-5">
        <div className="col-span-2">
          {/* img */}
          <div>
            <img src={src} alt="" />
          </div>

          {/* disc */}
          <p>
            My full name is Jehad Hossain. I’m a MERN Stack Web Developer. I
            have completed several courses, in the field of web development and
            learned about JavaScript, React, MaterialUI, MongoDB, Node.js, and
            many other tools and tech. And I’ve completed several projects in
            categories like e-commerce, education, booking, and portfolio. Every
            day I face a lot of errors but when I solve them I got a lot of fun.
            My hobbies are exploring new things, reading skill
            development-related books, and walking in the morning.
          </p>

          <form onSubmit={handleSendMessage}>
            {/* name  field */}
            <Input
              name="name"
              onChange={handleFormData}
              placeholder="Name"
              type="text"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            {/* email field */}
            <Input
              name="email"
              onChange={handleFormData}
              placeholder="E-mail"
              type="email"
              icon={
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              }
            />

            {/* message */}
            <TextArea
              name="message"
              onBlur={handleFormData}
              placeholder="Your message"
            />

            <Button type="submit" classes="w-full mx-auto mt-2">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
