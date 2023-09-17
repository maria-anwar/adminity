import React, { useState } from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

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
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);

        // ..
      });
  };

  return (
    <>
      <section className="">
        <div className="login-Parent">
          <div className="side-sec bg-blue">
            <div className="titlesec">Adminity</div>
            <div className="desc-sec">Where Great Things Happen</div>
            <div className="side-img">
              <img
                className=""
                src={process.env.PUBLIC_URL + "assets/images/login-img.png"}
                alt="login-img"
                height="450px"
              />
            </div>
          </div>
          {/* ---Login Card----- */}
          {/* <div className="login-title">Login</div> */}
          <div className="login-section">
            <div className="login-main bg-skyblue">
              <div className="google-login">
                {/* <div className="gicon text-warning">G</div> */}
                <Link className="" to="/register">
                  <FaGoogle size={20} color="tomato" />
                </Link>
                <Link to="/register" className="godesc">
                  <div>Sign up With Google</div>
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
                    {/* <div className="mb-2">
                      <label htmlFor="cname" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="cname"
                        className={`form-control ${
                          props.errors.cname && "is-invalid"
                        }`}
                        id="cname"
                        placeholder="your name.."
                        // aria-describedby="emailHelp"
                        value={props.values.cname} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                      />

                      {props.errors.cname ? (
                        <div
                          id="cname"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.cname}
                        </div>
                      ) : (
                        <div id="emailHelp" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                    </div> */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          props.errors.email && "is-invalid"
                        }`}
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="your email.."
                        value={props.values.email} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                      />
                      {props.errors.email ? (
                        <div
                          id="email"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.email}
                        </div>
                      ) : (
                        <div id="email" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${
                          props.errors.email && "is-invalid"
                        }`}
                        id="password"
                        placeholder="your password.."
                        value={props.values.password} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                      />
                      {props.errors.password ? (
                        <div
                          id="cname"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.password}
                        </div>
                      ) : (
                        <div id="emailHelp" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="confPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confPassword"
                        className={`form-control ${
                    props.errors.email && "is-invalid"
                  }`}
                        id="confPassword"
                        placeholder="your password.."
                        value={props.values.confPassword} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                      />
                      {props.errors.confPassword ? (
                        <div
                          id="cname"
                          className=" invalid-feedback text-danger"
                        >
                          {props.errors.confPassword}
                        </div>
                      ) : (
                        <div id="emailHelp" className="form-text">
                          We'll never share your information with anyone else.
                        </div>
                      )}
                    </div> */}

                    <button className="login-btn" type="submit">
                      Sign up
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
