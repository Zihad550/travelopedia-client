import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatchRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col align-center justify-center">
      <div>
        <h2 className="text-5xl text-center">OOPs Something happened wrong</h2>
        <p className="text-center mt-5 text-2xl">
          Go, Back to{" "}
          <button
            onClick={() => navigate("/")}
            className="text-2xl bg-violet-600 text-white rounded-lg p-3"
          >
            Home Page
          </button>
        </p>
      </div>
    </div>
  );
};

export default NoMatchRoute;
