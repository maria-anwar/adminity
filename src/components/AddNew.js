import React from "react";
import "./css/addNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const AddNew = () => {
  return (
    <>
      <section className="pt-3">
        <div className="addnew-bar">
        <div className="addnew-container">

          <div className="emp-title">Employee</div>
          <span className="grthan-icon my-2"><FontAwesomeIcon icon={faGreaterThan} /></span>
          <div className="title-clr title">Add New</div>
        </div>
          
          <button class="add-button bg-orange">
            Back <i className="fa fa-arrow-left" />
          </button>
        </div>
      </section>
    </>
  );
};
export default AddNew;
