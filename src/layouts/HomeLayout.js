import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./layout.css";
import Navbox from "../components/Navbox";

const HomeLayout = () =>{
    return(
        <div className="layout">
            <Navbar />
            <Navbox />
           <div className="child-pd">
           <Outlet />
           </div> 
        </div>
    );
};
export default HomeLayout;
