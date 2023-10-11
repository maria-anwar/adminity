import React from "react";
import { useLocation } from "react-router-dom";
import AddNew from "../components/AddNew";
import { Formik, Form } from "formik";
import * as Yup from "yup"; 
import NameField from "../components/inputfields/NameField";
import PhoneField from "../components/inputfields/PhoneField";
import DropdownField from "../components/inputfields/DropdownField";
import SimpleField from "../components/inputfields/SimpleField";

const AddLocation = () => {
  const location = useLocation();
  const pathname=location.pathname;
  const newPath =  pathname.replace(/\/create$/, "");
  console.log('path is', pathname);
  console.log('New path is', );

  const initialValues = { 
    locName: " ",
    address: "",
    contactName: "",
    phone: "",
    countryCode: "",
    timezone: "",
    addEmp:" ",
  };
  const validationSchema = Yup.object().shape({
    locName: Yup.string().required("Location name is required"),
    address: Yup.string().required("Address is required"),
    contactName: Yup.string().required("contact name is required"),
    addEmp: Yup.string().required("Please add employee"),
    phone: Yup.string().required("Phone number is required"),
    countryCode: Yup.string().required("please select country code*"),
    timezone: Yup.string().required("Please select the Timezone"),
    // password: Yup.string().min(8).required("Password is required"),
  });

  const onSubmit = (values) => {
    let userData = {
      locName: values.locName,
      address: values.address,
      contactName: values.contactName,
      phone: values.phone,
      countryCode: values.countryCode,
      timezone: values.timezone,
      addEmp: values.addEmp,
      
    };
    console.log(
      userData.locName,
      userData.address,
      userData.contactName,
      userData.phone,
      userData.countryCode,
      userData.addEmp,
      userData.timezone
    );
  };

  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <AddNew title={'Employee'} url={newPath}/>
        <div className="bg-[#F2F5F7] mt-2 xs:mt-3 md:mt-4 mb-10 xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 py-4 md:py-5 lg:py-6 rounded-md shadow-md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-4 justify-center ">
               
                <SimpleField
                  title={"Location Name"}
                  value={props.values.locName}
                  onChange={props.handleChange}
                  errors={props.errors.locName}
                  name={"locName"}
                  id={"locName"}
                  type={"locName"}
                  palce={"type here..."}
                />
                <SimpleField
                  title={"Address"}
                  value={props.values.address}
                  onChange={props.handleChange}
                  errors={props.errors.address}
                  name={"address"}
                  id={"address"}
                  type={"text"}
                  palce={"type here..."}
                />
                <SimpleField
                  title={"Contact Name"}
                  value={props.values.contactName}
                  onChange={props.handleChange}
                  errors={props.errors.contactName}
                  name={"contactName"}
                  id={"contactName"}
                  type={"text"}
                  palce={"type here..."}
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
                  title={"Add Employee"}
                  value={props.values.addEmp}
                  onChange={props.handleChange}
                  errors={props.errors.addEmp}
                  name={"addEmp"}
                  id={"addEmp"}
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
export default AddLocation;
