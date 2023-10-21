import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import Gvector from "../../assets/images/Gvector.svg";
import google from "../../assets/images/google.png";
import logimg from "../../assets/images/login-img.png";
const Register = () => {

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
  
    email: "",
    password: "",
    confPassword:'',
    
  };

  const validationSchema = Yup.object().shape({ 
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter your password"),
    confPassword: Yup.string().min(8).required("Please confirm your password"),
  });

  const onSubmit = (values) => {
    let userData = {
      email: values.email,
      password: values.password,
      confPassword: values.confPassword,
    };

    if(userData.confPassword === userData.password){
      
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
    }else{
      setPasswordError('Password is incorrect*')
    }

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
          <div className="bg-[#F4F6F8] flex flex-col xxs:px-5 xs:px-10 sm:px-16  md:px-28 pt-5 pb-5 lg:pt-8 lg:pb-16 xl:pb-20 gap-2 rounded-md  border ">
            <Link className="bg-white flex flex-row justify-center items-center gap-2 py-2 px-4 border border-[#8D888894] rounded-md ">
              <img src={google} alt="google-icon" className="w-4 h-4" />
              <div className=" font-Inter font-semibold text-xs  text-[#666262] ">
              Sign up using Google
              </div>
            </Link>
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

                      {
                        props.errors.email && <div
                          id="email"
                          className="invalid-feedback text-orange-500"
                        >
                          {props.errors.email}
                        </div>
                      }
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
                      placeholder="your password"
                    />
                     
                      {
                        props.errors.password && <div
                          id="password"
                          className="invalid-feedback text-orange-500"
                        >
                          {props.errors.password}
                        </div>
                      }
                  </div>

                  <div className="flex flex-col gap-1 mt-2">
                    <label
                      htmlForfor="email"
                      className="text-[#3C4349] text-medium font-Inter font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      className={`appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                        props.errors.confPassword && "text-orange-500"
                      }`}
                      id="confPassword"
                      name="confPassword"
                      type="password"
                      value={props.values.confPassword}
                      onChange={props.handleChange}
                      placeholder="your password"
                    />

                      {
                        props.errors.confPassword && <div
                          id="confPassword"
                          className="invalid-feedback text-orange-500"
                        >
                          {props.errors.confPassword}
                        </div>
                      }
                      <div className="text-red-500">{passwordError}</div>

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
