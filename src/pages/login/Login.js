import React from "react";
import "./login.css";

const Login = () => {
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
            <input placeholder="Email" className="loginInput" />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Creat a new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
