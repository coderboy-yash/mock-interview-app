// import React from 'react'

import { Fragment, useState } from "react";
import schedule from "../assets/schedule2.jpg";
import scheduleLogo from "../assets/sheduleLogo.png";
import Modal from "../components/Modal";
import Table from "../components/Table";
import Footer from "../components/Footer";

const Interviewee = () => {
  const [showModal, setShowModal] = useState(false);

  // /////////////////////////////////////

  return (
    <Fragment>
      <div className="flex h-screen mb-28 border-b-2 border-green-500">
        <div className="basis-1/2 flex flex-col gap-16 justify-center items-center  ">
          <div className="text-6xl text-gray-900 mt-16 font-extrabold p-6 font-play    ">
            Begin your journey towards becoming a perfect interviewer
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-1/2 text-xl bg-gray-900 text-white p-4 "
          >
            Schedule a free mock interview
          </button>
        </div>
        <div className="basis-1/2 ">
          <img className="w-[90%] mt-16" src={schedule} alt="" />
        </div>
      </div>
      {/* wxlkdfdkfld */}
      <div className="flex p-8">
        <img src={scheduleLogo} className="w-32 " alt="" />
        <span className="text-6xl p-8 font-bold text-gray-800">
          Get your schedule :
        </span>
      </div>

      <div className="m-40 mt-10 border-2 border-green-500">
        <Table role={"interviewer"}></Table>
      </div>
      <Footer></Footer>
      <Modal
        isVisible={showModal}
        role={"interviewer"}
        onClose={() => setShowModal(false)}
      ></Modal>
    </Fragment>
  );
};

export default Interviewee;
