import React, { useContext } from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import MyContext from "./../context";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const Table = ({ role }) => {
  const contextData = useContext(MyContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleJoinRoom = (roomId) => {
    console.log(roomId);
    navigate(`/room/${roomId}`);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/user/getdata`, {
        params: { role: role, uid: contextData.uid },
      })

      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // Assuming the response data is an array of objects similar to your initial data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time matched
            </th>
            <th scope="col" className="px-6 py-3">
              Interview Type
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>

            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Join
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.selectedDate}
              </th>
              <td className="px-6 py-4">{item.matchedTime}</td>
              <td className="px-6 py-4">{item.interviewType}</td>
              <td className="px-6 py-4">{item.rating}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">
                {item.roomId == "not available" ? (
                  <div>Waiting </div>
                ) : (
                  <button onClick={() => handleJoinRoom(item.roomId)}>
                    join
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
