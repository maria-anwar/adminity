import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const TitleBar = (props) => {

  const iconStyle = {
    color: "white", // Set the color to white
    fontSize: "16px", // Adjust the font size as needed
  };
  return (
    <>
     
      <section className="pt-2 xs:pt-3 sm:pt-4">
        <div className=" w-full px-4  py-2 sm:py-3 lg:py-4 flex justify-between items-center  bg-[#F2F5F7] rounded-md shadow-md">
          <div className="text-[#FC8955]  xxs:text-lg xs:text-base lg:text-lg xl:text-xl font-medium flex items-center">
            <span className="xxs:hidden xs:block">{props.title}</span> ({props.count})
          </div>
          <div className="flex gap-2 items-center">
          {/* search bar starts */}
          <div className="xxs:hidden sm:block h-full">
            <div className=" w-52 md:w-60 lg:w-[17rem] xl:w-80 sm:px-2 sm:py-0.5 md:py-1 flex items-center rounded-sm bg-transparent border border-gray-300">
              <input 
                className="text-sm text-gray-900 bg-transparent w-full"
                type="text" 
                placeholder="Search"
              />
              <FiSearch className="search-icon text-[#B7B1B1] text-sm md:text-base" />           
            </div>
          </div>
         {/* search bar Ends */}
            <Link
              to={props.url}
              className="xxs:hidden xs:block h-full bg-[#FC8955] px-1 xs:px-2 md:px-3 xs:py-1 md:py-1.5 text-white flex justify-center items-center xs:text-xs xl:text-sm xs:font-normal sm:font-medium  rounded-md"
            >
              {props.addbtn}
            </Link>
            {/* <Link to='/' className="xxs:block xs:hidden text-white py-2 px-2 bg-[#FC8955] text-2xl flex justify-center items-center rounded-md font-medium"><div className="border">+</div></Link> */}
            <Link
              to={props.url}
              className=" xs:hidden flex justify-center bg-[#FC8955] p-2 rounded-md border"
            >
              <FaPlus style={iconStyle} />
            </Link>
          </div>
        </div>
      
      </section>
    </>
  );
};
export default TitleBar;
