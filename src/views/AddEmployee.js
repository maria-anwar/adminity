import React from "react";
import { useLocation } from "react-router-dom";
import AddNew from "../components/AddNew";
//import "./css/AddForms.css";
import { Formik, Form } from "formik";
import * as Yup from "yup"; //For Validation Schema
import NameField from "../components/inputfields/NameField";
import PhoneField from "../components/inputfields/PhoneField";
import DropdownField from "../components/inputfields/DropdownField";
import SimpleField from "../components/inputfields/SimpleField";

const AddEmployee = () => {
  const location = useLocation();
  const pathname=location.pathname;
  const newPath =  pathname.replace(/\/create$/, "");
  console.log('path is', pathname);
  console.log('New path is', );

  const initialValues = {
    fname: " ",
    lname: " ",
    email: "",
    empId: "",
    phone: "",
    countryCode: "",
    timezone: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    empId: Yup.string().required("Employee Id is required"),
    phone: Yup.string().required("Phone number is required"),
    countryCode: Yup.string().required("please select country code*"),
    timezone: Yup.string().required("Timezone is required"),
    // password: Yup.string().min(8).required("Password is required"),
  });

  const onSubmit = (values) => {
    let userData = {
      fname: values.fname,
      lname: values.lname,
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
      {/* <section className="py-3">
        <div className="form-parent">
          <form className="addform">
            <div className="row">
              <NameField />
              <EmailField />
              <PhoneField />
              <DropdownField title={"Timezone"} />
              <DropdownField title={"Manager"} />
              <DropdownField title={"Position"} />
            </div>
            <button className="mybtn">Save</button>
          </form>
        </div>
      </section> */}
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <AddNew title={'Employee'} url={newPath}/>
        <div className="bg-[#F2F5F7] mt-2 xs:mt-3 md:mt-4 xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 py-4 md:py-5 lg:py-6 rounded-md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-4 justify-center ">
                <NameField
                  fnamevalue={props.values.fname}
                  lnamevalue={props.values.lname}
                  fnameErrors={props.errors.fname}
                  lnameErrors={props.errors.lname}
                  fnplaceholder={"Nick"}
                  lnplaceholder={"Morris"} 
                  onChange={props.handleChange}
                />
                <SimpleField
                  title={"Email"}
                  value={props.values.email}
                  onChange={props.handleChange}
                  errors={props.errors.email}
                  name={"email"}
                  id={"email"}
                  type={"email"}
                  placeholder={"morris@gmail.com"}
                />
                <SimpleField
                  title={"Employee ID"}
                  value={props.values.empId}
                  onChange={props.handleChange}
                  errors={props.errors.empId}
                  name={"empId"}
                  id={"empId"}
                  type={"text"}
                  placeholder={"emp1234"}
                />
                <PhoneField
                  value={props.values.phone}
                  codeValue={props.values.countryCode}
                  onChange={props.handleChange}
                  codeErrors={props.errors.countryCode}
                  phoneErrors={props.errors.phone}
                  placeholder={"123456789"}
                />
                <DropdownField
                  title={"Timezone"}
                  value={props.values.timezone}
                  onChange={props.handleChange}
                  errors={props.errors.timezone}
                  name={"timezone"}
                  id={"timezone"}
                  type={"text"}
                />
                <DropdownField
                  title={"Manager"}
                  value={props.values.manager}
                  onChange={props.handleChange}
                  errors={props.errors.manager}
                  name={"manager"}
                  id={"manager"}
                  type={"text"}
                />
                <DropdownField
                  title={"Position"}
                  value={props.values.position}
                  onChange={props.handleChange}
                  errors={props.errors.manager}
                  name={"position"}
                  id={"position"}
                  type={"text"}
                />
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
export default AddEmployee;
