// import React from "react";
import logo1 from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-screen overflow-hidden bg-gray-800 h-20 flex justify-between items-center ">
      <NavLink
        to="/"
        className="text-white text-2xl rounded-md font-extrabold font-castro
        flex "
      >
        <img src={logo1} className="h-20" alt="" />
      </NavLink>
      <div className="flex gap-6 m-16">
        <NavLink
          to="/interviewer"
          className=" text-white p-2 text-xl rounded-lg"
          activeClassName="active"
        >
          take interview
        </NavLink>
        <NavLink
          to="/interviewee"
          className=" text-white p-2 text-xl rounded-lg"
        >
          give interview
        </NavLink>
        <NavLink to="/signup" className=" text-white p-2 text-xl rounded-lg">
          sign up
        </NavLink>
        <NavLink
          to="login"
          className=" text-white p-2 text-xl rounded lg font-normal"
        >
          Log in
        </NavLink>
        {/* modal */}
      </div>
    </div>
  );
};

export default Navbar;
