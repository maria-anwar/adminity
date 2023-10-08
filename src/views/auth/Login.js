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
      {/* <section className="">
        <div className="login-Parent">
          <div className="side-sec bg-blue">
            <div className="titlesec">Adminity</div>
            <div className="desc-sec"> Where Great Things Happen</div>
            <div className="side-img">
              <img
                className=""
                src={process.env.PUBLIC_URL + "assets/images/login-img.png"}
                alt="login-img"
                height="450px"
              />
            </div>
          </div>

          <div className="login-section ">
            <div className="login-main bg-skyblue">
              <div className="google-login">
                <Link className="">
                  <FaGoogle size={20} color="tomato" />
                </Link>
                <Link className="godesc">
                  <div>Login With Google</div>{" "}
                </Link>
              </div>
              <div className="top-border">
                <hr />
              </div>
              {error && <div className="text-warning">{error}</div>}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlForfor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="type here..."
                        className={`form-control ${
                        props.errors.email && "is-invalid"

                        }`}
                        value={props.values.email}  //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      {props.errors.email && (
                        <div
                          id="email"
                          className="invalid-feedback text-danger"
                        >
                          {props.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlForfor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="type here..."
                        value={props.values.password} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                        className={`form-control ${
                        props.errors.password && "is-invalid"
                        }`}
                      />
                      {props.errors.password && (
                        <div
                          id="password"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <div className=" mb-3">
                      <Link className="forgot-pass" to="/register">
                        Forgot Password?
                      </Link>
                    </div>

                    <button className="login-btn" type="submit">
                      Login
                    </button>

                    <div className="signsec">
                      <div className="acc-desc darkgray">
                        Don’t have an account?
                      </div>
                      <Link className="sign-link blue" to="/register">
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
                      className={`appearance-none border-1 border-[#cac8c894] rounded-sm shadow-md  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${props.errors.email && "border-red-500"}`}
                      id="email"
                      value={props.values.email}
                      name="email"
                      type="email"
                      placeholder="jhon@gmail.com"
                      onChange={props.handleChange}
                    />
                    {props.errors.email && (
                        <div
                          id="email"
                          className="text-red-500"
                        >
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
                        <div
                          id="password"
                          className="text-red-500"
                        >
                          {props.errors.password}
                        </div>
                      )}
                  </div>
                  <Link to="/register" className="text-[#1997BE] text-right font-Inter font-semibold text-xs pb-2" style={{textDecoration:'none'}}>
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
                    {/* <span className="text-[#1997BE]">Sign up</span> */}
                    <Link to="/register" className="text-[#1997BE]" style={{textDecoration:'none'}}>Sign up</Link>
                  </div>
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
export default Login;
