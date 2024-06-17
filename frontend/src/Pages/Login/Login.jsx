import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import StudyIllustration from "../../assets/StudyIllustration.svg";
import "./Login.css";

function Login({ show }) {
   show(false);
   return (
      <div className="containerlogin d-flex justify-content-center align-items-center">
         <img
            className="p-1  d-none d-sm-block"
            src={StudyIllustration}
            alt=""
            height="700"
         />
         <form className="formContainer shadow d-flex flex-column align-items-center gap-3">
            <img className="mb-4" src={Logo} alt="" width={200} />
            <div className="form-group mb-2">
               <p className="m-0">Email</p>
               <input
                  className="inputBox"
                  type="text"
                  placeholder="Enter Email"
                  style={{ fontSize: "15px" }}
               />
            </div>
            <div className="form-group mb-2">
               <p className="m-0">Password</p>
               <input
                  className="inputBox"
                  type="text"
                  placeholder="Enter Password"
                  style={{ fontSize: "15px" }}
               />
            </div>
            <Button
               className="mt-2 mb-3 w-100 "
               style={{ fontSize: "13px" }}
               type="submit"
            >
               Login
            </Button>
            <Link to="/forgotpassword">
               <a style={{ fontSize: "13px" }} href="/">
                  Forgotten Password?
               </a>
            </Link>
            <p className=" mt-5" style={{ fontSize: "13px" }}>
               Don’t have account yet?
               <Link to={"/signup"} style={{ color: "blue", fontSize: "13px" }}>
                  Sign Up
               </Link>
            </p>
         </form>
      </div>
   );
}

export default Login;
