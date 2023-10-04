import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
const MyNav2 = () => {
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

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
        <nav className="bg-[#1997BE] flex justify-between  px-1 xs:px-6 sm:px-8 md:px-10 lg:px-16 items-center">
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
                  className={`hover:bg-[#2DC5F5] py-3 px-3 ${
                    location.pathname === "/" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white  md:text-base font-medium"
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    DASHBOARD
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-3 px-3 ${
                    location.pathname === "/schedule" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white font-normal text-xs md:text-base"
                    to="/schedule"
                    style={{ textDecoration: "none" }}
                  >
                    SCHEDULE
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-3 px-3 ${
                    location.pathname === "/timesheet" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white text-base font-normal"
                    to="/timesheet"
                    style={{ textDecoration: "none" }}
                  >
                    TIMESHEET
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-3 px-3 ${
                    location.pathname === "/reports" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <NavLink
                    className="text-white text-base font-normal"
                    to="/reports"
                    style={{ textDecoration: "none" }}
                  >
                    REPORTS
                  </NavLink>
                </li>
                <li
                  className={`hover:bg-[#2DC5F5] py-3 px-3 ${
                    location.pathname === "/tasks" ? "bg-[#2DC5F5]" : ""
                  }`}
                >
                  <Link
                    className="text-white md:text-base font-normal"
                    to="/tasks"
                    style={{ textDecoration: "none" }}
                  >
                    TASKS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="xxs:hidden lg:block text-white ">Profile</div>

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
          <div className="xxs:block md:hidden absolute bg-[#1997BE] px-6 w-[55%] pb-2">
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
                  className="text-white font-medium text-xs md:text-base"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  SCHEDULE
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs md:text-base font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  TIMESHEET
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs md:text-base font-medium"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  REPORTS
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-xs md:text-base font-medium"
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
