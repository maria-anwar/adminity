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
      <nav
          class="navbar navbar-expand-lg bg-gray py-3"
          data-bs-theme="light"
        >
          <div class="container-fluid ">
            {/* <a class="navbar-brand" href="#">
              Navbar
            </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="mynav-link active " href="#">
                    Home
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class=" nav-item">
                  <a class="mynav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="mynav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="mynav-link" href="#">
                    About
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-gray">
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
