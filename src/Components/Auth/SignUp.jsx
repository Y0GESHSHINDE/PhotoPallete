import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth, authProvider } from "../../Firebase/Firebase";
import { app } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setisSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created");
      setisSignup(true);
    } catch (error) {
      setError(error.code);
    }
  };

  const GmailSignin = async (e) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, authProvider);
      console.log("account created");
      setisSignup(true);
    } catch (error) {
      setError(error);
    }
  };

  if (isSignup) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Sign Up</h5>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign Up
            </button>
            <button
              type="button"
              onClick={GmailSignin}
              className="btn btn-info w-100 mb-3">
              Sign up with Google
            </button>
            <Link to="/signin" className="btn btn-secondary w-100">
              Go to Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
