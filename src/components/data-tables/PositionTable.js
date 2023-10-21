import React, { useState,useEffect } from "react";
import TitleBar from "../TitleBar";
import { db, collection, getDocs } from "../../config/firebase";

const PositionTable = () => {
  const [data,setData] = useState([]);
  const fetchPost = async () => {

    getDocs(collection(db, "positions")).then((response) => {
     const positionData = response.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     setData(positionData);
     console.log(positionData);
   });
 };
 useEffect(() => {
   fetchPost();
 }, []);

  const handleCheckboxChange = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <TitleBar
          title={"Positions"}
          count={"47"}
          addbtn={"Add Position"}
          url={"/positions/create"}
        />
        <section className="pt-3 md:pt-4">
          <div className="relative overflow-x-auto shadow-md xxs:rounded-lg border">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-[#1997BE] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Postion Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No. of employees
                  </th>

                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="bg-white border-b hover:bg-blue-100">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={item.selected || false}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.posTitle}
                    </th>
                    <td className="px-6 py-4">{''}</td>

                    <td className="px-6 py-4 text-center">
                      <a
                        href="#"
                        className="font-medium  text-blue-600 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* <section className="pt-3 md:pt-4">
          <div className="relative overflow-x-auto shadow-md xxs:rounded-lg border">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#1997BE] dark:bg-gray-700 dark:text-gray-400">
                <tr className="flex justify-between">
                <div className="flex">
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Postion Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No. of employees
                  </th>
                </div>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="flex justify-between bg-white border-b  hover:bg-blue-100">
                    <div className="flex justify-between">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={item.selected || false}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </td>
                    
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 sm:px-14 py-4">{item.employeeId}</td>
                    </div>

                    <td className="px-6 py-4 text-left">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section> */}
      </section>
    </>
  );
};
export default PositionTable;
