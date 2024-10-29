import React from 'react';
import { Link } from 'react-router-dom';

function LandingNavbar() {
   return (
      <div className="">
         <nav className="navbar navbar-expand-md bg-light " >
            <a className="navbar-brand text-dark marginLeft" href="#">
               PhotoPalette
            </a>
            <button
               className="navbar-toggler  m-1"
               type="button "
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon  "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item">
                     <Link to={"signup"} className="nav-link marginRight text-dark">
                        Sign up
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to={"signin"} className="nav-link marginRight text-dark" >
                        Sign in
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default LandingNavbar;
