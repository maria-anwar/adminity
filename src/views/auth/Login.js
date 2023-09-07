import React from "react";
import "../css/auth.css";
import { Link } from "react-router-dom";

const Login = () => {
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
              <form>
                
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
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
                  
                  <Link className="login-btn" to="/">
                       Login     
                  </Link>
                  
                  <div className="signsec">
                  <div className="acc-desc darkgray">Don’t have an account?</div>
                  <Link className="sign-link blue" to="/register">Sign up </Link>
                  </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
