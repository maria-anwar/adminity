import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; // for angle arrow
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; //for filled arrow
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default CSS
import filter from "../assets/images/filter.png";

const Schedule = () => {
  const location = useLocation();
  const [showCard, setShowCard] = useState("false");
  console.log(showCard);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const hanldeAddClick = () => {
    setShowCard(true);
    //console.log();
  };
  return (
    <>
      {/* Schedule Nav Area */}
      <nav className="w-full xs:px-4 md:px-5 lg:px-6 shadow-md ">
        <ul className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          <li className="py-3 sm:py-4 hover:border-b-2 border-b-[#55FC5C]">
            <NavLink
              to="/schedule"
              className="text-[#8D8888] font-medium xxs:text-xs xs:text-sm sm:text-base sm:py-4 leading-3  "
            >
              Full Schedule
            </NavLink>
          </li>
          <li className="py-3 sm:py-4 hover:border-b-2 border-b-[#55FC5C]">
            <NavLink
              to="/schedule"
              className="text-[#8D8888] font-medium xxs:text-xs xs:text-sm sm:text-base sm:py-4 leading-3  "
            >
              My Schedule
            </NavLink>
          </li>
          <li className="py-3 sm:py-4 hover:border-b-2 border-b-[#55FC5C]">
            <NavLink
              to="/schedule"
              className="text-[#8D8888] font-medium xxs:text-xs xs:text-sm sm:text-base sm:py-4 leading-3  "
            >
              Pending Approval
            </NavLink>
          </li>
          <li className="py-3 sm:py-4 hover:border-b-2 border-b-[#55FC5C]">
            <NavLink
              to="/schedule"
              className="text-[#8D8888] font-medium xxs:text-xs xs:text-sm sm:text-base sm:py-4 leading-3  "
            >
              Unavailability
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* date Area */}
      <div className="px-4 md:px-5 lg:px-6 py-4 sm:py-5  border border-b-[#8D8888]">
        <div className="flex justify-between">
          {/* left section  */}
          <div className="flex md:gap-3">
            <div className="flex justify-center items-center  border border-[#776565] md:w-8 md:h-8 rounded-sm ">
              <div className="border-2 border-[#CBC1C1] md:w-4 md:h-4 rounded-sm"></div>
            </div>
            <div className="flex border border-[#776565] md:h-8 w-14 rounded-sm">
              <div className="w-1/2 flex items-center justify-center">
                <IoIosArrowBack className="" />
              </div>
              <div className="border-l border-[#CBC1C1] w-1/2 flex items-center justify-center">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="flex items-center px-2 gap-1">
              <div className="text-[#3A3737]">Weekly</div>

              <FontAwesomeIcon
                icon={faCaretDown}
                className="w-3 h-3 text-[#3A3737]"
              />
            </div>
            <div className="flex items-center px-2 gap-1 ">
              <div className="text-[#1997BE] md:text-sm lg:text-lg xl:text-2xl md:font-medium lg:font-semibold">
                7July-12July
              </div>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="w-3 h-3 text-[#1997BE] pt-1"
              />
            </div>
            <div className="md:h-8 flex items-center border border-[#3A3737] md:px-4 rounded-sm">
              <div className="text-[#3A3737]">This Week</div>
            </div>
          </div>
          {/* Right section  */}
          <div className="flex md:gap-1.5">
            <div className="h-8 w-24 flex gap-1 justify-center items-center bg-[#1997BE] rounded-md">
              <div className="text-white text-xs md:text-sm font-semibold">
                Filters
              </div>
              <img src={filter} alt="filter-icon" className="w-4" />
            </div>
            <div className="h-8 w-8 flex items-center justify-center bg-[#1997BE] rounded-md">
              {/* <div className="text-white text-xl font-semibold">+</div> */}
              <FontAwesomeIcon
                className="text-white font-bold w-4 h-4 "
                icon={faPlus}
              />
            </div>
            <div className="md:h-8 w-24 flex justify-center items-center bg-[#3A3737] rounded-md">
              <div className="text-white">Publish</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Area */}

      <div className=" flex justify-between lg:py-4 lg:px-5 xl:px-6 border">
        <div className=" w-52 md:w-60 lg:w-[20rem] xl:w-[25rem] 2xl:w-[28rem] sm:px-2 sm:py-0.5 md:py-1 flex items-center bg-transparent border border-black rounded-sm shadow-md">
          <input
            className="text-sm text-gray-900 bg-transparent w-full focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <FiSearch className="search-icon text-[#1997BE] font-semibold text-sm md:text-base" />
        </div>
        <div className="flex gap-4 px-3 items-center border border-black py-1 rounded-sm shadow-md">
          <div className=" ">Sort by</div>
          <div className="text-black">a</div>
        </div>
      </div>
      {/* Planner Area */}
      <section className=" flex justify-center items-start p-10 border">
        <div className="flex justify-center items-start border py-10 px-20">
          {showCard === true ? (
            <div className=" flex flex-col gap-1 rounded-md bg-[#D7E5C6] p-4 w-48 ">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              />
              <div className="w-full flex justify-between">
                <div>created on</div>
                <div>icon</div>
              </div>
              <div>senior devops</div>
            </div>
          ) : (
            <button className="text-gray-400 text-5xl" onClick={hanldeAddClick}>
              +
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
