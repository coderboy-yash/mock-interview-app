// import React from 'react'
import interview from "../assets/interview.png";
import pressure from "../assets/pressure.png";
import companies from "../assets/companies.png";
const Description = () => {
  return (
    <div className="p-8 m-4 mb-8 flex flex-col gap-60 ">
      <div className="flex justify-center gap-16 ">
        <div className="basis-1/3 relative shadow-lg  shadow-slate-500 ">
          <div className="p-4">
            <img src={interview} alt="" />
          </div>
        </div>

        <div className="m-6">
          <p className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-500">
            Free mock interviews
          </p>
          <p className="text-xl">
            get as many free mock as you want for your preparaion.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-16  ">
        <div className="m-6 w-1/3">
          <p className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-500">
            Learn to handle pressure at interview
          </p>
          <p className="text-xl">
            Pressure handling is one of the major problems people face during
            interviews you can easily tackle with our platform.
          </p>
        </div>
        <div className="basis-1/3 relative shadow-lg   shadow-slate-400">
          <div className="p-4">
            <img src={pressure} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16 ">
        <div className="basis-1/3 relative shadow-lg   shadow-slate-400">
          <div className="p-4 ">
            <img src={companies} alt="" />
          </div>
        </div>

        <div className="m-6 w-1/3">
          <p className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-500">
            Interview with the professionals
          </p>
          <p className="text-xl">
            You can easily book an interview with the professional who are
            already working in your dream companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
