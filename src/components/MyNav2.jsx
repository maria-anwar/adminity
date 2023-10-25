import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import profile from "../assets/images/profile.png";
import { MdMenu } from "react-icons/md";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
//import { FaArrowDown } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

const MyNav2 = () => {
  const location = useLocation();
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDropdown = () => {
    setIsDropdownClicked(!isDropdownClicked);
    console.log(isDropdownClicked);
  };
  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };
  const iconStyle = {
    color: "white",
    fontSize: "24px",
  };

  return (
    <>
      <header className="w-full">
        <nav className="bg-[#1997BE] flex justify-between px-1 xs:px-6 sm:px-8 md:px-10 xl:px-16 items-center">
          <div className="flex lg:flex-row lg:gap-5 lg:items-center">
            <Link to="/">
              <h5 className="text-white font-xl">Adminity</h5>
            </Link>
            <div className="xxs:hidden lg:block">
              <ul
                className="flex flex-row items-center"
                style={{ marginBottom: "0", paddingLeft: "0" }}
              >
                <li
                  className={`hover:bg-[#2DC5F5] py-4 px-3 ${
                    location.pathname === "/" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white  lg:text-sm xl:text-base font-medium"
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    DASHBOARD
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-4 px-3 ${
                    location.pathname === "/schedule" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white font-normal text-xs lg:text-sm xl:text-base"
                    to="/schedule"
                    style={{ textDecoration: "none" }}
                  >
                    SCHEDULE
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-4 px-3 ${
                    location.pathname === "/timesheet" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white lg:text-sm xl:text-base font-normal"
                    to="/timesheet"
                    style={{ textDecoration: "none" }}
                  >
                    TIMESHEET
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-4 px-3 ${
                    location.pathname === "/reports" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white lg:text-sm xl:text-base font-normal"
                    to="/reports"
                    style={{ textDecoration: "none" }}
                  >
                    REPORTS
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-4 px-3 ${
                    location.pathname === "/tasks" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <Link
                    className="text-white lg:text-sm xl:text-base font-normal"
                    to="/tasks"
                    style={{ textDecoration: "none" }}
                  >
                    TASKS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Nav Profile Area starts here */}

          <div className="xxs:hidden lg:block">
            <div className="flex justify-center items-center gap-2.5 text-[#FFFFFF]">
              <Link to="/profile">
                <img
                  src={profile}
                  alt="profile"
                  className="w-8 xl:w-10 rounded-full"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <div className="text-xs xl:text-sm lg:text-base font-medium">
                  Maria Anwar
                </div>
                <div className="text-xs xl:text-sm font-light">Malhoc Inc.</div>
              </div>
              <button onClick={handleDropdown}>
                <IoIosArrowDown className="dropdown-icon" />
              </button>
            </div>
            {isDropdownClicked ? (
              <div
                className="text-red-500 absolute right-4 z-10 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md
               bg-white shadow-lg focus:outline-none"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="menu">
                  <Link
                    to="/"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Account settings
                  </Link>
                  <Link
                    to="/"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </Link>
                  <button
                    type="submit"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Nav Profile Area Ends here*/}

          <button
            className="xxs:block lg:hidden flex justify-center items-center py-2 cursor-pointer"
            onClick={toggleNavbar}
          >
            <MdMenu
              style={iconStyle}
              className="cursor-pointer border rounded-sm"
            />
          </button>
        </nav>
        {isClicked ? (
          <div className="xxs:block md:hidden absolute bg-[#1997BE] px-6 w-[55%] pb-2 z-50 border">
            <ul
              className="flex xxs:flex-col gap-[3vh]"
              style={{ marginBottom: "0", paddingLeft: "0" }}
            >
              <li>
                <Link
                  className="text-white text-xs font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium text-xs lg:text-sm"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  SCHEDULE
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs lg:text-sm font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  TIMESHEET
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs lg:text-sm font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  REPORTS
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs lg:text-sm font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  TASKS
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default MyNav2;
