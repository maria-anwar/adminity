import React, { useState,useEffect } from "react";
import TitleBar from "../TitleBar";
import { db, collection, getDocs } from "../../config/firebase";

const LocationTable = ()=>{

  const [data,setData] = useState([]);
  const fetchPost = async () => {
     getDocs(collection(db, "locations")).then((response) => {
      const locationsData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(locationsData);
      console.log(locationsData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  
  // const [data, setData] = useState([
    //     {
    //       id: 1,
    //       name: "John Doe",
    //       employeeId: "E123",
    //       position: "Software Engineer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 2,
    //       name: "John Doe",
    //       employeeId: "E127",
    //       position: "Software Engineer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 3,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 4,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 5,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 6,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 7,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 8,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     {
    //       id: 9,
    //       name: "John Doe",
    //       employeeId: "E124",
    //       position: "Web developer",
    //       location: "New York",
    //       email: "john@example.com",
    //       phone: "123-456-7890",
    //       status: "Active",
    //     },
    //     // Add more data rows as needed
    //   ]);
    
    const handleCheckboxChange = (id) => {
        setData(
          data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          )
        );
      };
    return(
        <>
     
     <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
      
        <TitleBar
        title={"Locations"}
        count={"12"}
        addbtn={"Add Location"}
        url={"/locations/create"}
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
                 location Name
                </th>
                <th scope="col" className="px-6 py-3">
                  address
                </th>
                <th scope="col" className="px-6 py-3">
                  contact name
                </th>
                <th scope="col" className="px-6 py-3">
                  contact number
                </th>
                <th scope="col" className="px-6 py-3">
                  Timezone
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
                    {item.locName}
                  </th>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">{''}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.timezone}</td>
                  <td className="px-6 py-4">{''}</td>
                  <td className="px-6 py-4 text-center">
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
export default LocationTable;