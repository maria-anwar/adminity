import React from "react";
import "../css/inputfield.css";
const   PhoneField = ()=>{
    return(
        <>
         <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
                <label className="pb-1 mylabel">Phone</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>+92</option>
                      <option value="1">+55</option>
                      <option value="2">+44</option>
                      <option value="3">+71</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
        </>
    );
};
export default PhoneField;
