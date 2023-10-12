import React from 'react';
import { Outlet } from "react-router-dom";
import MyNav2 from "../components/MyNav2";
import ProfileBar from '../components/ProfileBar';
const ProfileLayout = () => {
  return (
    <div className="layout">
    <MyNav2/>
    <ProfileBar />
      <div className="">
      <Outlet />
      </div> 
</div>
  )
}

export default ProfileLayout