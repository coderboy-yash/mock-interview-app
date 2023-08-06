// import React from "react";
import { signOut } from "firebase/auth";
import logo1 from "../assets/logo1.png";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";

const Navbar = ({setAuthUser,authUser}) => {
  const navigate = useNavigate();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        setAuthUser(null);
        console.log("sign out successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-screen overflow-hidden bg-gray-800 h-20 flex justify-between items-center ">
      <NavLink
        to="/"
        className="text-white text-2xl rounded-md font-extrabold font-castro
        flex "
      >
        <img src={logo1} className="h-20" alt="" />
      </NavLink>
      <div className="flex gap-6 m-16 items-center">
       
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
       {!authUser?(<div className="flex gap-6"><NavLink to="/signup" className=" text-white p-2 text-xl rounded-lg">
          sign up
        </NavLink>
        <NavLink
          to="login"
          className=" text-white p-2 text-xl rounded lg font-normal"
        >
          Log in
        </NavLink></div> ):(
         <button
          className=" text-white p-2 text-xl rounded-lg"
          onClick={userSignOut}
        >
          sign out
        </button>)}
        {/* modal */}
      </div>
    </div>
  );
};

export default Navbar;
