// import React from "react";
import logo1 from "../assets/logo1.png";
const Navbar = () => {
  return (
    <div className="w-screen overflow-hidden bg-gray-800 h-20 flex justify-between items-center ">
      <div className="text-white text-2xl rounded-md  font-extrabold font-castro   flex  ">
        <img src={logo1} className="h-20" alt="" />
      </div>
      <div className="flex gap-6 m-16">
        <button className=" text-white p-2 text-xl rounded-lg">sign up</button>
        <button className=" text-white p-2 text-xl rounded lg font-normal">
          Log in
        </button>
        {/* modal */}
      </div>
    </div>
  );
};

export default Navbar;
