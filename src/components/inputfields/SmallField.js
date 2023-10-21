import React from "react";


const SmallField = (props) => {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6">
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
export default SmallField;
