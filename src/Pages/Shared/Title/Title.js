import React from "react";

const Title = ({ children, classes }) => {
  return (
    <h2
      style={{ fontFamily: "'Lobster', cursive" }}
      className={`text-center text-5xl mb-10 border-b-4 pb-2  w-max mx-auto ${classes}`}
    >
      {children}
    </h2>
  );
};

export default Title;
