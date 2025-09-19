import React from "react";
import "../styles/loginSignup.css";
function Login({ setCurrentPage }) {
  function handleLoginClick() {
    setCurrentPage("signup"); // Navigate to signup page
  }

  return (
    <div className="loginSignupContainer" id="logininfo">
      <div className="myLoginSignupForm" style={{ position: "relative" }}>
        <button
          type="button"
          className="btn btn-close"
          aria-label="Close"
          onClick={() => setCurrentPage(null)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
          }}
        />
        <h1>Login Form</h1>
        <div className="loginSignupButtons">
          <button className="myLoginSignup" onClick={handleLoginClick}>
            Login
          </button>
          <button onClick={() => setCurrentPage("signup")}>Signup</button>
        </div>
        <form className="loginSignupForm">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your Password" />
          <a href="#">Forget Password</a>
          <button className="loginSignup">Login</button>
        </form>
        <p className="account">
          Create an account{" "}
          <a href="#" onClick={() => setCurrentPage("signup")}>
            Signup now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
