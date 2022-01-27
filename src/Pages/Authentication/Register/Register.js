import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import img from "../../../images/register.svg";

const Register = () => {
  // use firebase
  const { registerUser, error, user, googleLogin } = useAuth();

  // navigate & location
  const navigate = useNavigate();
  const location = useLocation();

  // states
  const [registerData, setRegisterData] = useState({});
  const { password, re_typed_password, name, email } = registerData;

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registerData };
    newData[field] = value;
    setRegisterData(newData);
  };
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== re_typed_password) {
      alert("password not matched");
    } else {
      registerUser(email, password, name, navigate, location);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-5">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="md:my-auto">
        <h2
          className="text-center text-5xl mb-5 text-white tracking-widest"
          style={{ textShadow: "0px 0px 6px black" }}
        >
          Register
        </h2>
        <form className="" onSubmit={handleRegister}>
          <input
            onBlur={handleBlur}
            name="name"
            type="text"
            required
            className="w-full rounded-md mb-2"
            placeholder="Name"
          />
          <input
            margin="dense"
            onBlur={handleBlur}
            name="email"
            type="email"
            required
            className="w-full rounded-md mb-2"
            placeholder="Email"
          />
          <input
            margin="dense"
            onBlur={handleBlur}
            name="password"
            type="password"
            required
            className="w-full rounded-md mb-2"
            placeholder="Password"
          />
          <input
            margin="dense"
            onBlur={handleBlur}
            name="re_typed_password"
            type="password"
            required
            className="w-full rounded-md mb-2"
            placeholder="Re-type password"
          />
          <button
            type="submit"
            className="text-xl w-full mt-1 py-2 bg-blue-500 rounded-lg text-white"
          >
            Register
          </button>

          {/* google login */}
          <div className="text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1">
            <button onClick={googleLogin}>
              Login With google{" "}
              <FontAwesomeIcon icon={faGoogle} className="text-blue-500" />
            </button>
          </div>

          {/* go to login */}
          <p className="text-center my-2 ">
            New user, Please{" "}
            <button
              onClick={() => navigate("/login")}
              className="underline text-blue-500"
            >
              Login
            </button>
          </p>
          {error && (
            <p className="py-1 bg-red-400 text-white text-center mt-1 rounded-md">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
