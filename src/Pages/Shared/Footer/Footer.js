import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-gray-300" sx={{ py: 3 }}>
      <div className="mx-40 py-10">
        <div className="md:grid  md:grid-cols-2 flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl ">Travelopedia</h2>
          </div>
          <div className="mt-5 md:mt-0 ">
            <p>Quick Links</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">My Bookings</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
