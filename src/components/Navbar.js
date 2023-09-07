import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg sticky-top px-5" data-bs-theme="dark">
        <div className="container-fluid cont-clr">
          <a className="navbar-brand" href="#">
            Adminity
          </a>
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
                <a className="nav-link active" href="/">
                  DASHBOARD
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/schedule">
                  SCHEDULE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/timesheet">
                  TIMESHEET
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reports">
                  REPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tasks">
                  TASKS
                </a>
              </li>
              <li className="nav-item dropdown">
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
              </li>
            </ul>
            <div className="nav-card">
            <div>
                    <img
                      className="navcard-img"
                      src="https://images.business.com/app/uploads/2022/03/23021439/freelancer_Prostock-Studio_getty-3.jpg"
                      alt="user-profile"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <div className="flex-column tmini-cont">
                    <h6 className="acc-title">Maria Anwar</h6>
                    <span className="ceoclr">Malhoc Inc.</span>
                  </div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
