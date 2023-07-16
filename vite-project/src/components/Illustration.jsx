// import React from 'react'
import conf from "../assets/confident.png";
import improve from "../assets/improve.png";
import success from "../assets/getjob.png";
import arrow from "../assets/arrow.png";
const Illustration = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="flex justify-around items-center bg-slate-200 mb-20 ">
        <div className="basis-1/4 font-bold text-xl text-gray-500   p-4  ">
          <img className="w-44 " src={improve} alt="" />
          <p className="mt-4">practice more and more interviews.</p>
        </div>
        <img src={arrow} className="w-10 h-10 " alt="" />
        <div className="basis-1/4 font-bold text-xl text-gray-500   p-4 ">
          <img className="w-28" src={conf} alt="" />
          <p className="mt-3">Be prepared to crack any multinational company</p>
        </div>
        <img src={arrow} className="w-10 h-10 " alt="" />
        <div className="basis-1/4 font-bold text-xl text-gray-500   p-4 ">
          <img className="w-28" src={success} alt="" />
          <p className="mt-4">Get placed at your dream company </p>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
