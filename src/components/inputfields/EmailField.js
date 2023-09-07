import React from "react";
import "../css/inputfield.css";
const   EmailField = ()=>{
    return(
        <>
         <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
                <label className="pb-1 mylabel">Email</label>
                <input
                  type="email"
                  id="name"
                  name="fname"
                  placeholder="name@gmail.com"
                  className="form-control"
                />
              </div>
        </>
    );
};
export default EmailField;
