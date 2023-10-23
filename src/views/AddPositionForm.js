import React, { useState } from "react";
import AddNew from "../components/AddNew";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup"; //For Validation Schema
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SimpleField from "../components/inputfields/SimpleField";
import SingleField from "../components/inputfields/SingleField";
import { db, collection, addDoc } from "../config/firebase";

const AddPositionForm = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const newPath = pathname.replace(/\/create$/, "");
  const [isToggled, setIsToggled] = useState(false);
  console.log(isToggled);

//console.log(isToggled);
  const handleToggle = () => {
    setIsToggled(!isToggled);
    // setIsToggled(true);
  };
  const initialValues = {
    posTitle: " ",
    wageRate: " ",
    addDoc: "",
    delDoc: "",
  };

  const validationSchema = Yup.object().shape({
    posTitle: Yup.string().required("please enter your position title"),
    wageRate: Yup.string().required("please enter your wage rate"),
    addDoc: Yup.string().required("please enter your docs name"),
    delDoc: Yup.string().required("please enter docs name"),
  });

  const onSubmit = (values) => {
    let userData = {
      posTitle: values.posTitle,
      wageRate: values.wageRate,
      addDoc: values.addDoc,
      delDoc: values.delDoc,
    };

    console.log(
      userData.posTitle,
      userData.wageRate,
      userData.addDoc,
      userData.delDoc
    );

    addDoc(collection(db, "positions"), userData)
      .then((response) => {
        console.log("Document written with ID: ", response.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <AddNew title={"Employee"} url={newPath} />
        <div className="bg-[#F2F5F7] flex items-center mt-2 mb-10 xs:mt-3 md:mt-4 xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 py-4 md:py-5 lg:py-6 xl:py-8 rounded-md shadow-md ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-4 xl:gap-5 justify-center w-full">
                <SimpleField
                  title={"Position Title"}
                  value={props.values.posTitle}
                  onChange={props.handleChange}
                  errors={props.errors.posTitle}
                  name={"posTitle"}
                  id={"posTitle"}
                  type={"text"}
                />
              <div className="sm:w-[70%] lg:w-[60%] xl:w-[50%]">
                  <SimpleField
                    title={"Wage Rate"}
                    value={props.values.wageRate}
                    onChange={props.handleChange}
                    errors={props.errors.wageRate}
                    name={"wageRate"}
                    id={"wageRate"}
                    type={"text"}
                  />
                </div>  

                <div className="sm:w-[70%] lg:w-[60%] xl:w-[50%] flex flex-col gap-3">
                  <div className="flex flex-col xxs:gap-4 md:flex-row md:justify-between">
                    <div className=" text-[#3C4349] font-semibold text-sm">
                      What documents do you require for this position?
                    </div>
                    <div>
                     <div class="relative inline-flex items-center cursor-pointer" onClick={handleToggle}>
                        <input type="checkbox" value="" class="sr-only peer"
                         checked={isToggled || false} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </div> 
              
                    </div>
                    
                    {/* Toggle functionality here */}
                  </div>
                    {isToggled? (
                      <div className="flex gap-2 justify-between">
                    <SingleField
                      name={"addDoc"}
                      id={"addDoc"}
                      type={"text"}
                      placeholder={"Name here"}
                      value={props.values.addDoc}
                      onChange={props.handleChange}
                    />
                    <button className="bg-[#1997BE] flex justify-center items-center w-10 lg:w-11 rounded-md">
                      <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-[#1997BE] font-semibold w-3 h-3"
                          icon={faPlus}
                        />
                      </div>
                    </button>
                  </div>
                  
                  ) :'' }
                  
                  <div className="flex gap-2 justify-between">
                    <SingleField
                      name={"delDoc"}
                      id={"delDoc"}
                      type={"text"}
                      placeholder={"Name here"}
                      value={props.values.delDoc}
                      onChange={props.handleChange}

                    />
                    <button className="bg-[#FF4242] flex justify-center items-center w-10 lg:w-11 rounded-md">
                      <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-[#FF4242] font-semibold w-3 h-3"
                          icon={faMinus}
                        />
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
