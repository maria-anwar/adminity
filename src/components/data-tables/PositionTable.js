import React, { useState, useEffect } from "react";
import TitleBar from "../TitleBar";
import ClipLoader from "react-spinners/ClipLoader";
import { FiMoreHorizontal } from "react-icons/fi";
import { db, collection, getDocs } from "../../config/firebase";

const PositionTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  let [color, setColor] = useState("#FC8955");
  let count = data.length;

  const fetchPost = async () => {
    getDocs(collection(db, "positions")).then((response) => {
      const positionData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(positionData);
      console.log(positionData);
      setIsLoading(false);
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

  //Modal functions starts here
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEdit = () => {
    // Add your edit logic here
    closeModal();
  };
  const handleDelete = () => {
    // Add your delete logic here
    closeModal();
  };

  //Modal functions ends here

  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <TitleBar
          title={"Positions"}
          count={count}
          addbtn={"Add Position"}
          url={"/positions/create"}
        />
        <section className="pt-3 md:pt-4 mb-10">
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
                {isLoading ? (
                  <div className="flex justify-center py-10 w-[100%]">
                    <ClipLoader
                      color={color}
                      loading={isLoading}
                      size={70}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  data.map((item) => (
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
                      <td className="px-6 py-4">{""}</td>

                      <td className="px-6 py-4 text-center">
                        {/* <a
                        href="#"
                        className="font-medium  text-blue-600 hover:underline"
                      >
                        Edit
                      </a> */}
                        <div
                          className="flex justify-center"
                          onClick={openModal}
                        >
                          <FiMoreHorizontal style={{ cursor: "pointer" }} />
                        </div>
                        {isOpen && (
                          <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div
                              className="modal-bg absolute inset-0 opacity-30"
                              onClick={closeModal}
                            ></div>

                            <div className="modal-content bg-white p-6 rounded-lg shadow-sm relative">
                              <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>

                              <h1 className="text-xl font-semibold mb-4">
                                Position Id
                              </h1>
                              <p className="text-md text-blue-500 font-medium">
                                {item.id}
                              </p>

                              <div className="mt-4">
                                <button
                                  onClick={handleEdit}
                                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={handleDelete}
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
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
