import React from "react";

const DropdownField = (props)=>{
    return(
        <>
            <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
                <label className="pb-1 mylabel">{props.title}</label>
                <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>+92</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
              </div>
        </>
    );
};
export default DropdownField;