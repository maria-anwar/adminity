import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NameField from "../components/inputfields/NameField";
import PhoneField from "../components/inputfields/PhoneField";
import DropdownField from "../components/inputfields/DropdownField";
import ProfileBar from "../components/ProfileBar";

const UserProfile = () => {
  return (
    <>
      {/* <AddNew />
      <section className="py-3 ">
      <nav
          class="navbar navbar-expand-lg bg-gray py-3"
          data-bs-theme="light"
        >
          <div class="container-fluid ">
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
      </section> */}

      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <ProfileBar title={"Employee"} name={"Jhon Morris"} />
        <div className="bg-[#F2F5F7] flex flex-col gap-4 mt-3 xs:mt-3 md:mt-4 py-2 md:py-5 lg:py-6 rounded-md shadow-md">
          <nav className="flex px-1 border">
            <ul className="flex flex-row items-center">
              <li className="hover:border-bottom py-2 px-3">
                <NavLink
                  className="text-[#454343] hover:text-[#1997BE] text-xs xs:text-sm sm:text-base  font-semibold xl:font-bold "
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  PERSONAL
                </NavLink>
              </li> 
              <li className="hover:border-bottom py-2 px-3">
                <NavLink
                  className="text-[#454343] hover:text-[#1997BE] text-xs xs:text-sm sm:text-base font-semibold xl:font-bold "
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  WORK
                </NavLink>
              </li> 
              <li className="hover:border-bottom py-2 px-3">
                <NavLink
                  className="text-[#454343] hover:text-[#1997BE] text-xs xs:text-sm sm:text-base font-semibold xl:font-bold "
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  DOCUMENT
                </NavLink>
              </li> 
              <li className="hover:border-bottom py-2 px-3">
                <NavLink
                  className="text-[#454343] hover:text-[#1997BE] text-xs xs:text-sm sm:text-base font-semibold xl:font-bold "
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  UNAVAILABILITY
                </NavLink>
              </li> 
            </ul>
          </nav>
          <div className="xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 ">
            profile Form
          </div>
        </div>
      </section>
    </>
  );
};
export default UserProfile;
