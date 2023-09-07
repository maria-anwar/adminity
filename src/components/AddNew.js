import React from "react";
import "./css/addNew.css";
const AddNew = () => {
  return (
    <>
      <section className="pt-3">
        <div className="addnew-bar">
          <div className="title-clr title">Add New</div>
          <button class="add-button bg-orange">
            Back <i className="fa fa-arrow-left" />
          </button>
        </div>
      </section>
    </>
  );
};
export default AddNew;
