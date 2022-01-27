import React, { useState } from "react";
import img from "../../../images/admin.svg";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    fetch(``)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="grid md:grid-cols-2">
      {/* image container */}
      <div>
        <img className="w-full h-auto" src={img} alt="" />
      </div>

      {/* form container */}
      <div className="my-auto flex flex-col">
        <h2 className="text-center text-4xl ">Add New Admin</h2>
        <form onSubmit={handleMakeAdmin} className="mx-auto">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="block">
            Make Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
