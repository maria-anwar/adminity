import React, { useState, useEffect, useCallback} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FiMoreHorizontal } from "react-icons/fi";
import { db, collection, getDocs } from "../config/firebase";
import SearchBar from "./SearchBar";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [cloneData, setcloneData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#FC8955");
    
  console.log(inputValue);

  const fetchPost = async () => {
    getDocs(collection(db, "employees")).then((response) => {
      const empData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(empData);
      setData(empData);
      setcloneData(empData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  

  useEffect(() => {

    if(inputValue){

      console.log('True part is running');
      const formattedSearch = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
      const filteredData = data.filter(item => 
        typeof item.fname === 'string' &&
        typeof inputValue === 'string' &&
        item.fname.includes(formattedSearch));

      console.log(filteredData); 
      setData(filteredData);
      console.log(inputValue); 

      // console.log('True part is running');
      // const formattedSearch = inputValue
      // .toLowerCase()
      // .split(' ')
      // .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
      // .join(' ');
      // const filteredData = data.filter(item => 
      //   typeof item.fname === 'string' &&
      //   typeof inputValue === 'string' &&
      //   item.fname.includes(formattedSearch));

      // console.log(filteredData); 
      // setData(filteredData);
      // console.log(inputValue);    
       
    }else{
      console.log('Clone part is running');
      setData(cloneData);
    }

}, [inputValue]);


   const handleSearch = useCallback(() => {
    console.log('Im Running');
    return 'hello';
  }, [inputValue]);


  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="flex justify-end pt-4">
          <SearchBar  setInputValue={setInputValue}/>
        </div>
        <section className="pt-3 md:pt-4 mb-10">
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
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
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
                      {/* <td>{item.id}</td> */}
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={item.selected || false}
                          //onChange={() => handleCheckboxChange(item.id)}
                        />
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.fname}
                      </th>
                      <td className="px-6 py-4">{item.position}</td>
                      <td className="px-6 py-4">{item.location}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">working..</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <FiMoreHorizontal style={{ cursor: "pointer" }} />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
};

export default MyTable;
