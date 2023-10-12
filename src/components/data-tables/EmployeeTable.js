import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleBar from "../TitleBar";

const EmployeeTable = () => {
  
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      employeeId: "E123",
      position: "Software Engineer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      employeeId: "E127",
      position: "Software Engineer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 3,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 4,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 5,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 6,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 7,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 8,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 9,
      name: "John Doe",
      employeeId: "E124",
      position: "Web developer",
      location: "New York",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    // Add more data rows as needed
  ]);

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
        title={"Employees"}
        count={"50"}
        addbtn={"Add Employee"}
        url={"/employees/create"}
      />
      <section className="pt-3 md:pt-4">
        <div className="relative overflow-x-auto shadow-md xxs:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-[#1997BE]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Employee ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="bg-white border-b hover:bg-gray-5">
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
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.employeeId}</td>
                  <td className="px-6 py-4">{item.position}</td>
                  <td className="px-6 py-4">{item.location}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.status}</td>
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
      </section>      
      </section>
    </>
  );
};

export default EmployeeTable;
