import React, { useState } from "react";
import AddNew from "../components/AddNew";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup"; //For Validation Schema
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import SimpleField from "../components/inputfields/SimpleField";
import SingleField from "../components/inputfields/SingleField";

const AddPositionForm = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const newPath = pathname.replace(/\/create$/, "");
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const initialValues = {
    fname: " ",
    lname: " ",
    email: "",
    empId: "",
    phone: "",
    countryCode: "",
    timezone: "",
    addDoc: "",
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    empId: Yup.string().required("Employee Id is required"),
    phone: Yup.string().required("Phone number is required"),
    countryCode: Yup.string().required("country code is required"),
    timezone: Yup.string().required("Timezone is required"),
    // password: Yup.string().min(8).required("Password is required"),
  });
  const onSubmit = (values) => {
    let userData = {
      addDoc: values.addDoc,
      fname: values.lname,
      email: values.email,
      empId: values.empId,
      phone: values.phone,
      countryCode: values.countryCode,
      timezone: values.timezone,
      manager: values.manager,
      position: values.position,
    };
    console.log(
      userData.lname,
      userData.fname,
      userData.email,
      userData.phone,
      userData.countryCode,
      userData.empId,
      userData.timezone
    );
  };
  return (
    <>
      {/* <AddNew />
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
      </section> */}

      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <AddNew title={"Employee"} url={newPath} />
        <div className="bg-[#F2F5F7] flex items-center mt-2 mb-10 xs:mt-3 md:mt-4 xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 py-4 md:py-5 lg:py-6 xl:py-8 rounded-md shadow-md ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-4 xl:gap-5 justify-center">
                <SimpleField
                  title={"Position Title"}
                  value={props.values.email}
                  onChange={props.handleChange}
                  errors={props.errors.email}
                  name={"email"}
                  id={"email"}
                  type={"email"}
                />
                <div className="sm:w-[70%] lg:w-[60%] xl:w-[50%]">
                  <SimpleField
                    title={"Wage Rate"}
                    value={props.values.empId}
                    onChange={props.handleChange}
                    errors={props.errors.empId}
                    name={"empId"}
                    id={"empId"}
                    type={"text"}
                  />
                </div>
                
                <div className="sm:w-[70%] lg:w-[60%] xl:w-[50%] flex flex-col gap-3">
                  <div className="flex flex-col xxs:gap-2 md:flex-row md:justify-between border ">
                    <div className=" text-[#3C4349] font-semibold text-sm">
                      What documents do you require for this position?
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                    <div
                      className={`relative border ${
                        isToggled ? "bg-blue-600" : "bg-gray-200"
                      } rounded-full w-12 h-6 transition duration-300 ease-in-out`}
                    >
                      <div
                        className={`absolute left-0 ${
                          isToggled ? "translate-x-full" : "translate-x-0"
                        } w-6 h-6 bg-white border-4 border-blue-600 rounded-full transition duration-300 ease-in-out transform ${
                          isToggled ? "translate-x-full" : "translate-x-0"
                        }`}
                      >
                        {isToggled ? (
                          <FaToggleOn className="w-4 h-4 m-1 text-blue-600" />
                        ) : (
                          <FaToggleOff className="w-4 h-4 m-1 text-gray-500" />
                        )}
                      </div>
                     
                    </div>
                    </label>
                   
                  </div>
                  <div className="flex gap-2 justify-between">
                  <SingleField
                    name={"addDoc"}
                    id={"addDoc"}
                    type={"text"}
                    placeholder={"Name here"}
                    value={props.values.addDoc}
                  />
                  <button className="bg-[#1997BE] flex justify-center items-center w-10 lg:w-11 rounded-md">
                  <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center"> 
                  <FontAwesomeIcon className="text-[#1997BE] font-semibold w-3 h-3" icon={faPlus} />
                  </div>
                   </button>
                  </div>
                  <div className="flex gap-2 justify-between">
                  <SingleField
                    name={"addDoc"}
                    id={"addDoc"}
                    type={"text"}
                    placeholder={"Name here"}
                    value={props.values.addDoc}
                  />
                  <button className="bg-[#FF4242] flex justify-center items-center w-10 lg:w-11 rounded-md">
                  <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center"> 
                  <FontAwesomeIcon className="text-[#FF4242] font-semibold w-3 h-3" icon={faMinus} />
                  </div>
                   </button>
                  </div>
                </div>

                <button
                  className="bg-[#1997BE] flex max-w-max mt-2 justify-start text-white text-sm font-medium px-4 py-2 rounded-md shadow-md"
                  type="submit"
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};
export default AddPositionForm;
