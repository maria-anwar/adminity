import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbox = () => {
  const [isEmpClicked, setEmpClicked] = useState(false);
  const [isPosClicked, setPosClicked] = useState(false);
  const [isLoClicked, setIsLoClicked] = useState(false);

  const handleEmpClick = () => {
    if (!isEmpClicked) {
      setEmpClicked(true);
      setPosClicked(false);
      setIsLoClicked(false);
    }
  };

  const handlePosClick = () => {
    if (!isPosClicked) {
      setPosClicked(true);
      setEmpClicked(false);
      setIsLoClicked(false);
    }
  };
  const handleLoClick = () => {
    if (!isLoClicked) {
      setIsLoClicked(true);
      setPosClicked(false);
      setEmpClicked(false);
    }
  };
  
  return (
    <>
       {/* <section className="navbox-parent border">
        <Link className="noLink" to="/employees">
          <div
            className={`navbox d-flex flex-column ${
              isEmpClicked ? "navboxafter" : ""
            }`}
            onClick={handleEmpClick}
          >
            <div className="title">Employees</div>
            <div
              className={`counts ${isEmpClicked ? "countsafter" : ""}`}
              onClick={handleEmpClick}
            >
              50
            </div>
          </div>
        </Link>
        <Link className="noLink" to="/positions">
          <div
            className={`navbox d-flex flex-column ${
              isPosClicked ? "navboxafter" : ""
            }`}
             onClick={handlePosClick}
          >
            <div className="title">Positions</div>
            <div
              className={`counts ${isPosClicked ? "countsafter" : ""}`}
               onClick={handlePosClick}
            >
              70
            </div>
          </div>
        </Link>
        <Link className="noLink" to="/locations">
          <div
            className={`navbox d-flex flex-column ${
              isLoClicked ? "navboxafter" : ""
            }`}
            onClick={handleLoClick}
          >
            <div className="title">Locations</div>
            <div
              className={`counts ${isLoClicked ? "countsafter" : ""}`}
             onClick={handleLoClick}
            >
              60
            </div>
          </div>
        </Link>
      </section>  */}
      <section className=" w-full flex flex-col xs:flex-row  justify-center items-center gap-1 sm:gap-2 pt-6 px-4 xs:px-20 sm:px-32 lg:px-12 ">
        <Link
          to="/employees"
          className={`w-24 sm:w-28 md:w-32 xl:w-36 sm:h-20  md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] flex flex-col justify-center bg-gradient-to-t from-[#1997BE] to-[#96BAC6] rounded-xl shadow-lg py-2 ${
            isEmpClicked ? "bg-white" : ""
          }`}
          style={{ textDecoration: "none" }}
          onClick={handleEmpClick}
        >
          <div
            className="text-white xs:px-1 text-sm sm:text-base xl:text-lg flex justify-center items-center pb-1 sm:pb-1"
            style={{ borderBottom: "1px solid white" }}
          >
            Employees
          </div>
          
          <div className=" text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium xl:font-normal flex justify-center items-center pt-1 ">
            50
          </div>
        </Link>

        <Link
          to="/positions"
          className={`w-24 sm:w-28 md:w-32 xl:w-36  sm:h-20 md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] flex flex-col justify-center bg-gradient-to-t from-[#1997BE] to-[#96BAC6] rounded-xl shadow-lg py-2 ${
            isEmpClicked ? "bg-white" : ""
          }`}
          style={{ textDecoration: "none" }}
          onClick={handlePosClick}
        >
          <div
            className="text-white xs:px-2 text-sm  sm:text-base xl:text-lg flex justify-center pb-1 items-center"
            style={{ borderBottom: "1px solid white " }}
          >
            Positions
          </div>
          <div className=" text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold lg:font-medium xl:font-normal px-3 pt-1 flex justify-center items-center">
            07
          </div>
        </Link>

        <Link
          className={`w-24 sm:w-28 md:w-32 xl:w-36 sm:h-20 md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] flex flex-col justify-center bg-gradient-to-t from-[#1997BE] to-[#96BAC6] rounded-xl shadow-lg py-2 ${
            isEmpClicked ? "bg-white" : ""
          }`}
          to="/locations"
          style={{ textDecoration: "none" }}
          onClick={handleLoClick}
        >
          <div
            className="text-white xs:px-2 text-sm sm:text-base xl:text-lg flex justify-center items-center pb-1"
            style={{ borderBottom: "1px solid white" }}
          >
            Locations
          </div>
          <div className=" text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold lg:font-medium xl:font-normal flex justify-center items-center pt-1 ">
            67
          </div>
        </Link>
      </section>
    </>
  );
};
export default Navbox;
