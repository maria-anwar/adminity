import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const ProfileNavbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="flex px-1">
        <ul className="flex flex-row items-center">
          <li className="px-3">
            <NavLink
              className={`hover:border-b-2 border-b-[#1997BE] py-4 text-[#454343] text-xs xs:text-sm sm:text-base  font-semibold xl:font-bold ${
                location.pathname === "/profile"
                  ? "border-b-2 border-b-[#1997BE] text-[#1997BE]"
                  : ""
              }`}
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              PERSONAL
            </NavLink>
          </li>
          <li className=" px-3">
            <NavLink
              className={`hover:border-b-2 border-b-[#1997BE] py-4 text-[#454343] text-xs xs:text-sm sm:text-base  font-semibold xl:font-bold ${
                location.pathname === "/profile/work"
                  ? "border-b-2 border-b-[#1997BE] text-[#1997BE]"
                  : ""
              }`}
              to="/profile/work"
              style={{ textDecoration: "none" }}
            >
              WORK
            </NavLink>
          </li>
          <li className=" px-3">
            <NavLink
              className={`hover:border-b-2 border-b-[#1997BE] py-4 text-[#454343] text-xs xs:text-sm sm:text-base  font-semibold xl:font-bold ${
                location.pathname === "/profile/documents"
                  ? "border-b-2 border-b-[#1997BE] text-[#1997BE]"
                  : ""
              }`}
              to="/profile/documents"
              style={{ textDecoration: "none" }}
            >
              DOCUMENTS
            </NavLink>
          </li>
          <li className=" px-3">
            <NavLink
              className={`hover:border-b-2 border-b-[#1997BE] py-4 text-[#454343] text-xs xs:text-sm sm:text-base  font-semibold xl:font-bold ${
                location.pathname === "/profile/unavailability"
                  ? "border-b-2 border-b-[#1997BE] text-[#1997BE]"
                  : ""
              }`}
              to="/profile/unavailability"
              style={{ textDecoration: "none" }}
            >
              DOCUMENTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProfileNavbar;
