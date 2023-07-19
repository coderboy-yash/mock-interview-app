// import React from "react";

const Table = () => {
  const data = [
    { id: "19 - 7 - 2023", name: "Frontend", status: "not matched" },
    { id: "19 - 7 - 2023", name: "Frontend", status: "not matched" },
    { id: "19 - 7 - 2023", name: "Frontend", status: "not matched" },
    { id: "19 - 7 - 2023", name: "Frontend", status: "not matched" },
    { id: "19 - 7 - 2023", name: "Frontend", status: "not matched" },
  ];

  return (
    <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400 ">
      <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            requested on
          </th>
          <th scope="col" className="px-6 py-3">
            Topic
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.id}
            </th>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
