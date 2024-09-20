import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mx-auto bg-black text-white text-center p-6 sm:p-10">
      <div className="footer-heading">
        <h1 className="text-4xl md:text-[100px] font-extrabold font-futura">
          U Tech International
        </h1>
        <div className="flex flex-wrap md:mt-10 justify-center w-full max-w-4xl mx-auto gap-2 text-base md:text-[20px] text-gray-400">
          <p
            className="cursor-pointer hover:text-blue-600 hover:underline"
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </p>
          <span>|</span>
          <p
            className="cursor-pointer hover:text-blue-600 hover:underline"
            onClick={() => {
              navigate('/users/user/all-products');
            }}
          >
            Products
          </p>
          <span>|</span>
          <p>News</p>
          <span>|</span>
          <p
            className="cursor-pointer hover:text-blue-600 hover:underline"
            onClick={() => {
              navigate('/terms-conditions');
            }}
          >
            Terms And Conditions
          </p>
        </div>
      </div>
      <div className="footer-body text-gray-400 mt-6 md:mt-10">
        <p className="text-xl md:text-[25px] text-gray-300 mt-8">Follow Us!</p>
        <div className="flex gap-4 justify-center text-2xl md:text-[30px] mt-2">
          <i className="fab fa-youtube cursor-pointer hover:text-[#192adb]"></i>
          <i className="fab fa-twitter cursor-pointer hover:text-[#192adb]"></i>
          <i className="fab fa-facebook cursor-pointer hover:text-[#192adb]"></i>
          <i className="fab fa-instagram cursor-pointer hover:text-[#192adb]"></i>
          <i className="fab fa-linkedin cursor-pointer hover:text-[#192adb]"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
