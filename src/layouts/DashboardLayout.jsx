import React from "react";
import { Outlet } from "react-router-dom";
import Navbox from "../components/Navbox";

const DashboardLayout = () => {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <Navbox />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
