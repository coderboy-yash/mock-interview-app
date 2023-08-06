// import React from 'react'
import bgVideo from "../assets/v3.mp4";
import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-end mt-20 h-screen">
        <div className="basis-1/2 flex  align-top flex-col  ">
          <img src={logo2} className="w-48" alt="" />
          <div className="text-6xl text-gray-900 mt-16 font-bold p-6 font-castro    ">
            Clear your all future interviews with confidence
          </div>
          <p className="ml-6 mt-16 text-xl border-b-2 border-gray-900">
            Practice and learn from experienced professionals in your field
          </p>
          <div className="ml-6 flex gap-4 mt-6 ">
            <NavLink to="/interviewee" className="bg-gray-900 text-white rounded-lg p-4">
              Get a free mock interview
            </NavLink>
            <NavLink to="/interviewer" className="bg-gray-900 text-white rounded-lg p-4">
              take interview
            </NavLink>
          </div>
        </div>
        <div className="basis-1/2 ">
          <video
            className="rounded-r-lg "
            src={bgVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
