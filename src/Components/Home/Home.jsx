import { useState } from "react";
import React from "react";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import "./Home.css";
import Upload from "../Upload/Upload";
import GetImages from "../getimages/GetImages";

function Home() {
  const user = auth.currentUser;
  const [isLogout, setIsLogout] = useState(false);

  const logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      setIsLogout(true);
      localStorage.removeItem("isUserLogin");
    } catch (error) {
      console.log(error.code);
    }
  };

  if (isLogout) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            PhotoPallete
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-danger nav-link " onClick={logout}>
                  Sign Out
                </button> {/* Logout button */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Upload />
        <GetImages />
      </div>
    </>
  );
}

export default Home;
