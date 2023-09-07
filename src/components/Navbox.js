import React, { useState } from "react";
import "./css/navbox.css";
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
  
  const handlePosClick = () =>{

     if (!isPosClicked) {
      setPosClicked(true);
      setEmpClicked(false);
      setIsLoClicked(false);
    } 
  };
  const handleLoClick = () =>{

     if(!isLoClicked)
    {
      setIsLoClicked(true);
      setPosClicked(false);
      setEmpClicked(false);
    }
 };
  return (
    <>
      <section className="navbox-parent">
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
      </section>
    </>
  );
};
export default Navbox;
