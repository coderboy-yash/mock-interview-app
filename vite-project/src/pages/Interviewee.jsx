// import React from 'react'
import { Fragment, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import schedule from "../assets/schedule.jpg";
import scheduleLogo from "../assets/sheduleLogo.png";
import Modal from "../components/Modal";
import Table from "../components/Table";
import Footer from "../components/Footer";

const Interviewee = () => {
  // const navigate = useNavigate();
  // const callPage = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/giveInterview`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     if (!res.status === 200) {
  //       console.log(res.error);
  //     } else {
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   callPage();
  // }, []);

  const [showModal, setShowModal] = useState(false);

  // /////////////////////////////////////

  return (
    <Fragment>
      <div className="flex h-screen mb-28 border-b-2 border-green-500">
        <div className="basis-1/2 flex flex-col gap-16 justify-center items-center  ">
          <div className="text-6xl text-gray-900 mt-16 font-extrabold p-6 font-play    ">
            Begin your journey towards cracking any interview
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-1/2 text-xl bg-gray-900 text-white p-4 "
          >
            Schedule a free mock interview
          </button>
        </div>
        <div className="basis-1/2">
          <img className="w-[80%]" src={schedule} alt="" />
        </div>
      </div>
      {/* wxlkdfdkfld */}
      <div className="flex p-8">
        <img src={scheduleLogo} className="w-32" alt="" />
        <span className="text-6xl p-8 font-bold text-gray-800">
          Get your schedule :
        </span>
      </div>

      <div className="m-40 mt-10 border-2 border-green-500">
        <Table role="interviewee"></Table>
      </div>
      <Footer></Footer>
      <Modal
        isVisible={showModal}
        role={"interviewee"}
        onClose={() => setShowModal(false)}
      ></Modal>
    </Fragment>
  );
};

export default Interviewee;
