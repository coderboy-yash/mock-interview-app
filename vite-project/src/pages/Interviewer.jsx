// import React from 'react'
import schedule from "../assets/schedule2.jpg";

const Interviewer = () => {
  return (
    <div className="flex  mb-48 scroll-smooth h-screen">
      <div className="basis-1/2 flex flex-col gap-16 justify-center items-center  ">
        <div className="text-6xl text-gray-900 mt-16 font-extrabold p-6 font-play  leading-tight   ">
          Begin your journey towards becoming a perfect interviewer
        </div>
        <button className="w-1/2 text-xl bg-gray-900 text-white p-4 ">
          Schedule a free mock interview
        </button>
        {/* <InlineWidget url="https://calendly.com/nigamy911/30min" /> */}
      </div>
      <div className="basis-1/2 mt-20">
        <img className="w-[90%]" src={schedule} alt="" />
      </div>
      {/* wxlkdfdkfld */}
    </div>
  );
};

export default Interviewer;
