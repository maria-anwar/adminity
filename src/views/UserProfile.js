import React from "react";
import AddNew from "../components/AddNew";
import "./css/AddForms.css";
import NameField from "../components/inputfields/NameField";
import EmailField from "../components/inputfields/EmailField";
import PhoneField from "../components/inputfields/PhoneField";
import DropdownField from "../components/inputfields/DropdownField";
import { NavLink, Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <AddNew />

      <section className="py-3 ">
        <div className="bg-gray">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Personel
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link txt-clr active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item text-block">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="d-flex justify-content-center text-align-center">
            <Link to="/profile">
              <img
                className="profile-img"
                src="https://images.business.com/app/uploads/2022/03/23021439/freelancer_Prostock-Studio_getty-3.jpg"
                alt="user-profile"
                width="100px"
                height="100px"
              />
            </Link>
          </div>
        </div>
        <div className="form-parent">
          <form className="addform">
            <div className="row">
              <NameField />
              <EmailField />
              <PhoneField />
              <DropdownField title={"Timezone"} />
            </div>
            <button className="mybtn">Save</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default UserProfile;
