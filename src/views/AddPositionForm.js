import React from "react";
import AddNew from "../components/AddNew";
import "./css/AddForms.css";
import SingleField from "../components/inputfields/SingleField";
import SmallField from "../components/inputfields/SmallField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const AddPositionForm = () => {
  return (
    <>
      <AddNew />
      <section className="py-3">
        <div className="form-parent">
          <form className="addform">
            <div className="row">
              <SingleField
                title={"Position Title"}
                placeholder={"Type Here.."}
              />
              <SmallField title={"Wage Rate"} placeholder={"Type Here.."} />
              <div className="col-lg-12 col-md-12 col-sm-12 py-3">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 maindoc">
                    <div className="mydoc">
                      What documents do you require for this position?
                    </div>
                    <div>Toggle Here..</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 py-3">
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-2">
                <input
                  type="text"
                  id="name"
                  name="fname"
                  placeholder=""
                  className="form-control"
                  
                />
              
              <button className="incbtn"> <FontAwesomeIcon icon={faPlus} /></button>
              
                
             
              </div>
              </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-2">
                <input
                  type="text"
                  id="name"
                  name="fname"
                  placeholder=""
                  className="form-control"
                  
                />
              
              <button className="decbtn"> <FontAwesomeIcon icon={faMinus} /></button>
              
                
             
              </div>
            </div>
            <button className="mybtn my-4">Save</button>

          </form>
        </div>
      </section>
    </>
  );
};
export default AddPositionForm;
