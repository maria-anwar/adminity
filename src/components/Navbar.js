import React from "react";
import "./css/navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg nav-bg sticky-top px-5"
        data-bs-theme="dark"
      >
        <div className="container-fluid cont-clr ">
          <Link className="navbar-brand" to="/">
            Adminity
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  DASHBOARD
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/schedule">
                  SCHEDULE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/timesheet">
                  TIMESHEET
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reports">
                  REPORTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tasks">
                  TASKS
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li> */}
            </ul>
            <div className="nav-card">
              
                <Link to="/profile">
                  <img
                    className="navcard-img"
                    src="https://images.business.com/app/uploads/2022/03/23021439/freelancer_Prostock-Studio_getty-3.jpg"
                    alt="user-profile"
                    width="50px"
                    height="50px"
                  />
                </Link>
                <div className="dropdown">

               <Link 
                  to="/profile"

                  className=""
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{textDecoration:'none'}}
                  >

                <div className="d-flex">
              <div className="flex-column tmini-cont">
                <h6 className="acc-title">Maria Anwar</h6>
                <span className="ceoclr">Malhoc Inc.</span>
              </div>
              <div className="pt-3 ms-3 ">
                
                  <FontAwesomeIcon
                    className="dropdown-icon "
                    icon={faAngleDown}
                    id="dropdownMenuButton1"
                  />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      view profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      settings
                    </a>
                  </li>
                </ul>
               
              </div>
                </div>
               </Link>
                </div>
             

             
            </div>
          </div>
        </div>
      </nav>

     
    </>
  );
};
export default Navbar;
