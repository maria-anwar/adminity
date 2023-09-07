import React from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; //For Validation Schema

const Login = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("Will show error message");
  const user = {
    email: "maria@mern.com",
    password: "mm123456",
  };
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
    
    if(values.email===user.email && values.password===user.password){
      setError('');
      navigate('/');
    }
    else setError('Wrong Credentials!');
    
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
                <div className="gicon">icon</div>
                <div className="godesc">Login With Google</div>
              </div>
              <div className="top-border">
                <hr />
              </div>
              <div className="godesc text-danger">{error}</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${props.errors.email && 'is-invalid'}`}
                        value={props.values.email} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      <div className="invalid-feedback text-warning">{props.errors.email}</div>

                      {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div> */}
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={props.values.password} //Onchange what is happening is binded with value
                        onChange={props.handleChange}
                        className={`form-control ${
                          props.errors.password && "is-invalid"
                        }`}
                      />
                                    <div className="invalid-feedback text-warning">{props.errors.password}</div>

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
                      <Link className="forgot-pass" to="/">
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
