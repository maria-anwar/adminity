import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbox from "../components/Navbox";
import MyNav2 from "../components/MyNav2";

const HomeLayout = () =>{
    return(
        <div className="layout">
            {/* <Navbar /> */}
            <MyNav2/>
            <Navbox />
           <div className="">
           <Outlet />
           </div> 
        </div>
    );
};
export default HomeLayout;
