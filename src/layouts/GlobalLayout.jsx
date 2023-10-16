import React from "react";
import { Outlet } from "react-router-dom";
import MyNav2 from "../components/MyNav2";
const GlobalLayout = () => {
  return (
    <>
      <div className="layout">
        <MyNav2 />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default GlobalLayout;
