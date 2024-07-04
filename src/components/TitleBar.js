import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const TitleBar = (props) => {
  const [isSubmit, setIsSubmit] = useState("false");
  const iconStyle = {
    color: "white", // Set the color to white
    fontSize: "16px", // Adjust the font size as needed
  };

  const handleSubmit = () => {
    setIsSubmit(!isSubmit);
  };

  return (
    <>
      <section className="pt-2 xs:pt-3 sm:pt-4">
        <div className=" w-full px-4  py-2 sm:py-3 lg:py-4 flex justify-between items-center  bg-[#F2F5F7] rounded-md shadow-md">
          <div className="text-[#FC8955]  xxs:text-lg xs:text-base lg:text-lg xl:text-xl font-medium flex items-center">
            <span className="xxs:hidden xs:block">{props.title}</span> (
            {props.count})
          </div>
          <div className="flex gap-2 items-center border">
            {/*--------- search bar starts----------- */}
            {/* <div className="xxs:hidden sm:block h-full">
            <div className=" w-52 md:w-60 lg:w-[17rem] xl:w-80 sm:px-2 sm:py-0.5 md:py-1 flex items-center rounded-sm bg-transparent border border-gray-300">
              <input 
                className="text-sm text-gray-900 bg-transparent w-full focus:outline-none"
                type="text" 
                placeholder="Search"
              />
              <div
              onClick={handleSubmit}
              >
              <FiSearch className="search-icon text-[#B7B1B1] text-sm md:text-base" 
                //onClick={props.onSearchClickListener(e.target.value)}

              />           
              </div>
            </div>
          </div> */}

            <div className="h-full border">
              <div className="relative flex flex-wrap  items-stretch w-52 md:w-60 lg:w-[17rem] xl:w-80">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                <button
                  className="relative z-[2] bg-blue-500 flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* search bar Ends */}

            <Link
              to={props.url}
              className="xxs:hidden xs:block h-full bg-[#FC8955] px-1 xs:px-2 md:px-3 xs:py-1 md:py-1.5 text-white flex justify-center items-center xs:text-xs xl:text-sm xs:font-normal sm:font-medium  rounded-md"
            >
              {props.addbtn}
            </Link>
            {/* <Link to='/' className="xxs:block xs:hidden text-white py-2 px-2 bg-[#FC8955] text-2xl flex justify-center items-center rounded-md font-medium"><div className="border">+</div></Link> */}
            <Link
              to={props.url}
              className=" xs:hidden flex justify-center bg-[#FC8955] p-2 rounded-md border"
            >
              <FaPlus style={iconStyle} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default TitleBar;
