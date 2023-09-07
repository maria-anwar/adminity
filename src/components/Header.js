import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./css/navbar.css";

const Header = () =>{
    return(
      <>
      {/* <h1 className="text-danger">something</h1> */}
      <nav className="navbar navbar-expand-lg bg-blue">
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="#">Adminity</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">DASHBOARD</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">SCHEDULE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">TIMESHEET</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">REPORTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">TASKS</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>  
    );
}
export default Header;