import React from "react";
import "../css/inputfield.css";
const   NameField = ()=>{
    return(
        <>
            <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
                <label className="pb-1 mylabel">Name</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="text"
                      id="name"
                      name="fname"
                      placeholder="First Name"
                      className="form-control"
                    />
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
export default NameField;