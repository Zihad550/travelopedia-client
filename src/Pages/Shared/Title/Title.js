import React from "react";

const Title = ({ children }) => {
  return (
    <h2
      style={{ fontFamily: "'Lobster', cursive" }}
      className="text-center text-5xl mb-10 border-b-4 pb-2  w-max mx-auto"
    >
      {children}
    </h2>
  );
};

export default Title;
