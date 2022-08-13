import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password..."
        />

        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
