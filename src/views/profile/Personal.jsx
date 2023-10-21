import React from "react";
//import { Link, NavLink, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ProfileNavbar from "../../components/ProfileNavbar";
import profile from "../../assets/images/profile.png";
import NameField from "../../components/inputfields/NameField";
import SimpleField from "../../components/inputfields/SimpleField";
import PhoneField from "../../components/inputfields/PhoneField";
import DropdownField from "../../components/inputfields/DropdownField";


const Personal = () => {

  const initialValues = {
    fname: " ",
    lname: " ",
    cname: "",
    phone: "",
    countryCode: "",
    timezone: "",
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    cname: Yup.string().required("please enter your company name"),
    phone: Yup.string().required("please enter your phone number"),
    countryCode: Yup.string().required("please select country code*"),
    timezone: Yup.string().required("Timezone is required"),
    
  });

  const onSubmit = (values) => {
    let userData = {
      lname: values.lname,
      fname: values.fname,
      cname: values.cname,
      phone: values.phone,
      countryCode: values.countryCode,
      timezone: values.timezone,
    };
    console.log(
      userData.lname,
      userData.fname,
      userData.cname,
      userData.phone,
      userData.countryCode,
      userData.timezone
    );
  };

  return (
    <>
      
      <section className="  xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="bg-[#F2F5F7] flex flex-col gap-4 mt-3 xs:mt-3 md:mt-4 mb-10 lg:mb-16 py-2 md:py-5 lg:py-6 rounded-md shadow-md">
          <ProfileNavbar />
          <div className="flex flex-col xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-36">
           <div className="flex justify-center">
            <img 
              src={profile}
              alt="profile-img"
              className=" w-20 h-20 rounded-full"
            />
           </div>
           <Formik
           initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
           >
             {(props) => (<Form className="flex flex-col gap-4 justify-center">
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
                  title={"Company Name"}
                  value={props.values.cname}
                  onChange={props.handleChange}
                  errors={props.errors.cname}
                  name={"cname"}
                  id={"cname"}
                  type={"text"}
                  placeholder={"Microsoft"}
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
            </Form>
            )}
           </Formik>
          
          </div>
        </div>
      </section>
    </>
  );
};
export default Personal;

