import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isUserLogin","true")
      setIsLogin(true);
    } catch (error) {
      setError(error.message);
    }
  };

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Sign In</h5>
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
            <button type="submit" className="btn btn-primary w-100 mb-3">Sign In</button>
            <Link to="/signup" className="btn btn-secondary w-100">Go to Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
