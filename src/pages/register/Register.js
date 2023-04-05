import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">Social Media</h4>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Confirm Password"
              className="loginInput"
              type="password"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Already you have an account?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
