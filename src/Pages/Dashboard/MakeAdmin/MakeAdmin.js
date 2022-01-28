import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  const handleMakeAdmin = (e) => {
    const user = { email: email };
    e.preventDefault();
    fetch(`https://tranquil-springs-69154.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount > 0 && alert("successfully maked");
        setEmail("");
      });
  };
  return (
    <div className=" ">
      {/* form container */}
      <div className="my-auto w-96 h-96 mx-auto mt-20">
        <h2 className="text-center text-4xl my-5">Add New Admin</h2>
        <form onSubmit={handleMakeAdmin} className="mx-auto">
          <input
            className="rounded-lg w-full"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="block w-full bg-blue-700 text-white py-2 mt-1 rounded-lg"
          >
            Make Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
