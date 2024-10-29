import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import ProtectedRouteSignPage from "./Components/Auth/ProtectedRouteSignPage";
import ProtectedRouteSignUpPage from "./Components/Auth/ProtectedRouteSignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteSignPage>
              <SignIn />
            </ProtectedRouteSignPage>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteSignUpPage>
              <SignUp />
            </ProtectedRouteSignUpPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
