import React from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const ProfileBar = (props) => {
  return (
    <>
      <section className="pt-2 xs:pt-3 sm:pt-4">
        <div className=" w-full px-4  py-2 sm:py-3 lg:py-4 flex justify-between items-center  bg-[#F2F5F7] rounded-md shadow-md">
          <div className=" text-black  flex justify-center items-center gap-0.5 text-sm  xs:text-base sm:text-lg lg:font-semibold font-bold xs:font-medium ">
           <div className="xxs:hidden xs:block">{props.title}</div>
           <FaGreaterThan className="xxs:hidden xs:block text-[#C2BCBC] text-xs"/>
           <span className="text-[#1997BE]">{props.name}</span> 
          </div>
          <div className="flex gap-1.5 items-center bg-[#FC8955B3] border border-[#FC8955] px-2 xs:px-3 sm:px-4 xs:py-1.5 md:py-1.5 rounded-md ">
            <Link
              to={props.url}
              className="text-white h-full flex justify-center items-center text xs:text-xs sm:text-sm xl:text-sm xs:font-medium"
            >
              Back
            </Link>
            <FaArrowLeft 
              className="text-white text-xs sm:text-sm font-medium "
            /> 
          </div>
        </div>
      
      </section>
    </>
  );
};
export default ProfileBar;
