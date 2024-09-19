import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className=" mx-auto bg-black text-white text-center h-[510px] sm:w-full">
      <div className="footer-heading">
        <h1 className="text-[100px] font-extrabold font-futura">
          U Tech International
        </h1>
        <div className="flex flex-wrap justify-center w-4/5 mx-auto gap-2 text-[20px] text-gray-400">
          <p className="cursor-pointer  hover:text-blue-600 hover:underline" onClick={() => {navigate('/')}}>Home</p>
          <span>|</span>
          <p className="cursor-pointer  hover:text-blue-600 hover:underline" onClick={() => {navigate('/users/user/all-products')}}>Products</p>
          <span>|</span>
          <p>News</p>
          <span>|</span>
          <p className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => {navigate('/terms-conditions')}}>Terms And Conditions</p>
        </div>
      </div>
      <div className="footer-body text-gray-400 w-4/5 mx-auto mt-10">
        <p className="text-[25px] text-gray-300 mt-8">Follow Us!</p>
        <div className="flex gap-5 text-gray-400 mt-2 justify-center text-[30px]">
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
