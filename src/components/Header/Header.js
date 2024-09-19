import React from "react";
import headerImg from "../Header/images/header-1.webp";
import headerImg2 from "./images/header-2.jpg";
import headerImg3 from "./images/header-3.jpg";
import { Button } from "@mui/material";
import Trading_Keys from "../Trading_Keys/Trading_Keys";
function Header() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "contain",
        }}
        className=" h-fit "
      >
        <div className="bg-black opacity-75">
          <div className=" flex justify-between h-screen text-white p-8">
            <div>
              <div>
                <h1 className="text-6xl font-bold mb-4">
                  Look first / Then leap.
                </h1>
                <p className="text-slate-300 text-2xl">
                  The best trades require research, commitment.
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex justify-center mt-6 ">
                <input
                  type="text"
                  placeholder="Search markets here"
                  className=" text-white bg-white rounded-lg px-4 py-2 w-64"
                />
              </div>

              {/* Market Icons and Prices */}
              <div className="mt-8 flex justify-around">
                <div>
                  <i className="fas fa-bitcoin text-blue-500 text-5xl"></i>
                  <p className="font-bold text-white text-2xl">Bitcoin</p>
                  <p className="text-gray-400 font-bold text-xl">
                    $48,500 (+2.3%)
                  </p>
                </div>
                {/* Repeat similar blocks for NIFTY and BANKNIFTY */}
              </div>

              {/* "Watch Explainer" Button */}
              <div className="mt-8 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2">
                  <i className="fas fa-play mr-2"></i> Watch explainer
                </button>
                <p className="text-gray-400 mt-2">
                  Attributed to Alex Honnold, free climber
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* <div  className="h-screen" style={{backgroundImage: `url(${headerImg3})`,backgroundSize: "cover",}}></div> */}
          </div>
        </div>
      </div>
      {/* <Trading_Keys/> */}
      <div className="bg-black h-screen flex flex-col justify-evenly">
        <div className="text-8xl text-white font-bold">
          Where the world does markets
        </div>
        <div className="text-3xl  text-slate-300 mt-10">
          Join 60 million traders and investors taking the future into their own
          hands.
        </div>
        <div className="flex justify-center mt-10 ">
          <div className="p-10 border-2 hover:bg-slate-300 hover:text-black hover:border-blue-700 border-slate-400 rounded-full text-4xl text-white">
            {/* <Button className="p-10 border-2 border-slate-400 rounder-full text-4xl text-white"> */}
            Explore Features
            {/* </Button> */}
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="w-screen h-96 md:h-[500px]"
          style={{
            backgroundImage: `url(${headerImg2})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
}

export default Header;
