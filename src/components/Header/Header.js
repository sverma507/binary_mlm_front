import React from "react";
import headerImg from "../Header/images/header-1.jpg";
import headerImg2 from "./images/header-2.jpg";
import headerImg3 from "./images/header-3.jpg";
import headerImg4 from "./images/header-4.jpeg";
import { Button } from "@mui/material";
import Trading_Keys from "../Trading_Keys/Trading_Keys";
import Carousel from "../Carousel/Carousel";

function Header() {
  return (
    <>
    <Carousel/>
      <div
        style={{
          backgroundImage: `url(${headerImg3})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
        className="flex items-center justify-center"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-lg w-full max-w-md p-6 rounded-3xl text-center text-white">
          <div className="text-2xl md:text-3xl font-bold mb-4">What is Forex?</div>
          <div className="text-base md:text-lg mb-4">
            Forex is one of the most enormous and liquid markets around the globe. In 2010, the forex market accounted for more than 3 trillion dollars of daily trading. Over the last decade, a 40% increase in the daily volume of forex trade with 6.6 trillion dollars each day is seen. This marks a nine-year peak since 2010. But the surprising fact is that the market did not exist a century ago. Unlike the stock market, we cannot trace the roots of the forex market.
          </div>
        </div>
      </div>

      <div className="bg-black py-10 flex flex-col items-center">
        <div className="text-4xl md:text-7xl text-white font-bold text-center">
          Where the world does markets
        </div>
        <div className="text-xl md:text-3xl text-slate-300 mt-5 text-center">
          Join 60 million traders and investors taking the future into their own hands.
        </div>
        <div className="flex justify-center mt-6">
          <div className="p-4 md:p-6 border-2 hover:bg-slate-300 hover:text-black hover:border-blue-700 border-slate-400 rounded-full text-2xl md:text-4xl text-white transition duration-200">
            Explore Features
          </div>
        </div>
      </div>

      <div
        className="w-screen h-64 md:h-96"
        style={{
          backgroundImage: `url(${headerImg2})`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default Header;
