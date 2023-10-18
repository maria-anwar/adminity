import React from "react";
// import "../css/auth.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
// import Gvector  from "../../../public/assets/images/field1.png";
import Gvector from "../../assets/images/Gvector.svg";
import logimg from "../../assets/images/login-img.png";
import google from "../../assets/images/google.png";

const Login = () => {
  //const [data, setData] = useState([]);
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

  // const user = {
  //   email: "maria@mern.com",
  //   password: "mm123456",
  // };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  });

  const onSubmit = (values) => {
    let userData = {
      email: values.email,
      password: values.password,
    };

    const auth = getAuth();

    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
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
      <section className="md:flex h-screen w-full">
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

        <div className=" flex items-center shadow-md xxs:px-5 xs:px-10 sm:px-16  md:px-20 lg:px-24 xl:px-48 xxs:py-10  xs:py-12  md:w-full  lg:py-24  xl:pt-20 h-full ">
          <div className="w-full bg-[#F4F6F8] flex flex-col xxs:px-5 xs:px-10 sm:px-10 md:px-20 lg:px-12 pt-5 pb-5 lg:pb-10 xl:pb-20 gap-2 rounded-md border">
            <div className="bg-white flex flex-row justify-center items-center gap-2 py-2 px-4 border border-[#8D888894] rounded-md shadow-md">
              <img src={google} alt="google-icon" className="w-4 h-4" />
              <div className=" font-Inter font-semibold text-xs  text-[#666262] ">
                Login using Google
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
                      htmlFor="email"
                      className="text-[#3C4349] text-medium font-Inter font-medium"
                    >
                      Email
                    </label>

                    <input
                      className={`w-full appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                        props.errors.email && "border-red-500"
                      }`}
                      id="email"
                      value={props.values.email}
                      name="email"
                      type="email"
                      placeholder="jhon@gmail.com"
                      onChange={props.handleChange}
                    />
                    {props.errors.email && (
                      <div id="email" className="text-red-500">
                        {props.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <label
                      htmlFor="email"
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
                      placeholder=""
                    />
                    {props.errors.password && (
                      <div id="password" className="text-red-500">
                        {props.errors.password}
                      </div>
                    )}
                  </div>
                  <Link
                    to="/register"
                    className="text-[#1997BE] text-right font-Inter font-semibold text-xs pb-2"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot Password?
                  </Link>
                  <button
                    type="submit"
                    className="bg-[#1997BE] py-2 rounded-lg text-white font-Inter font-semibold "
                  >
                    Login
                  </button>

                  <div className="font-Inter font-medium text-[#8D8888] text-xs text-center">
                    Don’t have an account?
                    <Link
                      to="/register"
                      className="text-[#1997BE]"
                      style={{ textDecoration: "none" }}
                    >
                      Sign up
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
{/* 
      <section className="md:flex md:h-screen w-full h-full">
        <div className="xxs:hidden md:block w-2/5  bg-[#1997BE] px-4 pt-3 md:pt-6 xl:pt-10 border h-screen">
          <div className="flex flex-col gap-20  h-full">
            <div className="flex flex-col gap-5 border">
              <h2 className=" text-white font-semibold text-3xl font-Inter">
                Adminty
              </h2>
              <div className=" text-white font-sm text-xl">
                Where Great Things Happen
              </div>
            </div>
            <img src={logimg} alt="login-image" className="bg-contain" />
          </div>
        </div>

        <div className=" flex items-center md:justify-center  w-full ">
          <div className="xxs:px-5 xxs:py-10 xs:px-10 sm:px-16 md:px-20 md:w-full lg:px-28 lg:py-24 xl:px-48 xl:pt-20 shadow-md h-full w-full">
            <h2 className="md:hidden xxs:block text-[#1997BE] text-center text-lg xs:text-2xl font-medium">
              Adminty
            </h2>
            <div className="bg-[#F4F6F8] flex flex-col xxs:px-5 xs:px-10 sm:px-10 md:px-20 pt-5 pb-5 xl:pt-5 xl:pb-14 gap-2 rounded-md border">
              <div className="bg-white flex flex-row justify-center items-center gap-2 py-2 px-4 border border-[#8D888894] rounded-md ">
                <img src={google} alt="google-icon" className="w-4 h-4" />
                <div className=" font-Inter font-semibold text-xs  text-[#666262] ">
                  Login using Google
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
                        htmlFor="email"
                        className="text-[#3C4349] text-medium font-Inter font-medium"
                      >
                        Email
                      </label>

                      <input
                        className={`appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                          props.errors.email && "border-red-500"
                        }`}
                        id="email"
                        value={props.values.email}
                        name="email"
                        type="email"
                        placeholder="jhon@gmail.com"
                        onChange={props.handleChange}
                      />
                      {props.errors.email && (
                        <div id="email" className="text-red-500">
                          {props.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <label
                        htmlFor="email"
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
                        placeholder=""
                      />
                      {props.errors.password && (
                        <div id="password" className="text-red-500">
                          {props.errors.password}
                        </div>
                      )}
                    </div>
                    <Link
                      to="/register"
                      className="text-[#1997BE] text-right font-Inter font-semibold text-xs pb-2"
                      style={{ textDecoration: "none" }}
                    >
                      Forgot Password?
                    </Link>
                    <button
                      type="submit"
                      className="bg-[#1997BE] py-2 rounded-lg text-white font-Inter font-semibold "
                    >
                      Login
                    </button>

                    <div className="font-Inter font-medium text-[#8D8888] text-xs text-center">
                      Don’t have an account?
                      
                      <Link
                        to="/register"
                        className="text-[#1997BE]"
                        style={{ textDecoration: "none" }}
                      >
                        Sign up
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Login;
