import React from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

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
      <section className="">
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
          {/* ---Login Card----- */}
          {/* <div className="login-title">Login</div> */}
          <div className="login-section ">
            <div className="login-main bg-skyblue">
              <div className="google-login">
                {/* <div className="gicon"><FontAwesomeIcon icon={faGoogle} /></div> */}
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
                        value={props.values.email} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      {props.errors.email && (
                        <div
                          id="email"
                          className=" invalid-feedback text-danger"
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
                      <label className="form-check-label" for="exampleCheck1">
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
      </section>
    </>
  );
};
export default Login;
