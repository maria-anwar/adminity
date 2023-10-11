import React from "react";
import "../css/inputfield.css";

const SingleField = (props) => {
  return (
    <>
      {/* <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
        <input
          type="text"
          id="name"
          name="fname"
          placeholder={props.placeholder}
          className="form-control"
        />
      </div> */}

      <input
        className={`w-full border text-gray-700 rounded-sm shadow-sm py-1 lg:py-1.5 px-3 focus:outline-none focus:border-blue-500 ${
          props.lnameErrors && "border-red-500 focus:border-red-500"
        }`}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};
export default SingleField;
