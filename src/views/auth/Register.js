import React, { useState } from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import Gvector from "../../assets/images/Gvector.svg";
import logimg from "../../assets/images/login-img.png";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyB-ew79o0YFbhYGEOQeNB_ZssQy_OdONfI",
    authDomain: "adminty-48b7e.firebaseapp.com",
    projectId: "adminty-48b7e",
    storageBucket: "adminty-48b7e.appspot.com",
    messagingSenderId: "516759787652",
    appId: "1:516759787652:web:f8d3e5d01954d618398ad1",
    measurementId: "G-XZ01M4PSNJ",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const initialValues = {
    //cname: "",
    email: "",
    password: "",
    //confPassword: "",
  };

  const validationSchema = Yup.object().shape({
    //cname: Yup.string().required("Company name is required"),
    email: Yup.string().email().required("Email is VERY required"),
    password: Yup.string().min(8).required("Password is required"),
    //confpassword: Yup.string().min(8).required("Confirm your Password"),
  });

  const onSubmit = (values) => {
    let userData = {
      // cname: values.cname,
      email: values.email,
      password: values.password,
      // confPassword: values.confPassword,
    };

    console.log(values);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);

        
      });
  };

  return (
    <>
      
      <section className="md:flex h-screen">
        <div className="xxs:hidden md:block w-2/5 flex flex-col justify-between bg-[#1997BE] px-4 pt-3 md:py-0 border h-screen">
          <div className="flex flex-col gap-5">
            <h2 className=" text-white font-semibold text-3xl font-Inter">
              Adminity
            </h2>
            <div className=" text-white font-sm text-xl">
              Where Great Things Happen
            </div>
          </div>
          <img src={logimg} alt="login-image" className="bg-contain" />
        </div>

        {/*-------Login Card----*/}

        <div className="shadow-md xxs:px-5 xxs:py-10  xs:px-10  xs:py-12 sm:px-16 md:px-20 md:w-full  lg:px-28 lg:py-24 xl:px-48 xl:pt-20 h-full">
          <div className="bg-[#F4F6F8] flex flex-col xxs:px-5 py-5 gap-2 rounded-md xs:px-10 border sm:px-16 md:px-28">
            <div className="bg-white flex flex-row justify-center items-center gap-2 py-2 px-4 border border-[#8D888894] rounded-md ">
              <img src={Gvector} alt="google-icon" className="w-4 h-4" />
              <div className=" font-Inter font-semibold text-xs  text-[#666262] ">
              Sign up using Google
              </div>
            </div>
            <hr />
            {error && <div className="text-warning">{error}</div>}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlForfor="email"
                      className="text-[#3C4349] text-medium font-Inter font-medium"
                    >
                      Email
                    </label>

                    <input
                      className={`appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${props.errors.email && "border-red-500"}`}
                      id="email"
                      value={props.values.email}
                      name="email"
                      type="email"
                      placeholder="jhon@gmail.com"
                      onChange={props.handleChange}
                    />
                     {props.errors.email ? (
                        <div
                          id="email"
                          className="invalid-feedback text-danger"
                        >
                          {props.errors.email}
                        </div>
                      ) : (
                        <div id="email" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <label
                      htmlForfor="email"
                      className="text-[#3C4349] text-medium font-Inter font-medium"
                    >
                      Password
                    </label>
                    <input
                      className={`appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                        props.errors.password && "border-red-500"
                      }`}
                      id="password"
                      name="password"
                      type="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      placeholder="******************"
                    />
                     {props.errors.password ? (
                        <div
                          id="password"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.password}
                        </div>
                      ) : (
                        <div id="password" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#1997BE] mt-2 py-2 rounded-lg text-white font-Inter font-semibold "
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
            {/* <div>Check box</div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
