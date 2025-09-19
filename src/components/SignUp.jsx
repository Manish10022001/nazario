import React, { useState } from "react";
import "../styles/loginSignup.css";
function SignUp({ setCurrentPage }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignupClick() {
    setCurrentPage("login");
  }

  function handleSubmit(e) {
    e.preventDefault();
    password !== confirmPassword
      ? setError("Passwords do not match")
      : setError("");
  }

  return (
    <div className="loginSignupContainer" id="logininfo">
      <div className="myLoginSignupForm" style={{ position: "relative" }}>
        {" "}
        {/* position relative import for keeping x(close) in modal*/}
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
        <h1>Signup Form</h1>
        <div className="loginSignupButtons">
          <button onClick={() => setCurrentPage("login")}>Login</button>
          <button className="myLoginSignup" onClick={handleSignupClick}>
            Signup
          </button>
        </div>
        {/* signup form */}
        <div className="scroll-wrapper">
          <form className="loginSignupForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile*"
              pattern="[0-9]{10}"
              required
            />
            <input type="email" placeholder="Email*" />
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <div style={{ color: "red", marginBottom: 8 }}>{error}</div>
            )}

            <button className="loginSignup" type="submit">
              Sign up
            </button>
          </form>
          <p className="account">
            Have an account?{" "}
            <a href="#" onClick={() => setCurrentPage("login")}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
