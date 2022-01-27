import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import img from "../../../images/login.svg";
import Header from "../../Shared/Header/Header";

const Login = () => {
  // usefirebase
  const { login, error, googleLogin } = useAuth();
  // navigate & location
  const navigate = useNavigate();
  const location = useLocation();

  // states
  const [loginData, setLoginData] = useState({});
  const { email, password } = loginData;

  // handlers
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password, location, navigate);
  };
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 ">
        <div className="hidden lg:block">
          <img src={img} alt="" />
        </div>
        <div className="md:my-auto ">
          <h2
            className="text-center text-5xl mb-5 mt-20 lg:mt-0 text-white "
            style={{ textShadow: "0px 0px 6px black" }}
          >
            Login
          </h2>
          <form className="" onSubmit={handleLogin}>
            <input
              onBlur={handleBlur}
              name="email"
              type="email"
              required
              className="w-full rounded-md mb-2"
              placeholder="Email"
            />
            <input
              onBlur={handleBlur}
              name="password"
              margin="dense"
              label="Password"
              type="password"
              required
              className="w-full rounded-md"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full mt-1 py-2  text-xl bg-blue-500 rounded-lg text-white"
            >
              Login
            </button>

            {/* google login */}
            <div className="text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1">
              <button onClick={googleLogin}>
                Login With google{" "}
                <FontAwesomeIcon icon={faGoogle} className="text-blue-500" />
              </button>
            </div>

            {/* goto register */}
            <p className="text-center my-2 ">
              New user, Please{" "}
              <button
                onClick={() => navigate("/register")}
                className="underline text-blue-500"
              >
                Register
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
    </>
  );
};

export default Login;
