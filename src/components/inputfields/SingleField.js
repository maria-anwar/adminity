import React from "react";
import "../css/inputfield.css";

const SingleField = (props) => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
        <label className="pb-1 mylabel">{props.title}</label>

        <input
          type="text"
          id="name"
          name="fname"
          placeholder={props.placeholder}
          className="form-control"
        />
      </div>
    </>
  );
};
export default SingleField;
