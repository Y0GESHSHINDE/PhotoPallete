import React from 'react'
import LandingNavbar from './LandingNavbar'
import './LandingPage.css'
import Wave1 from './Wave/Wave1'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className='container-fluid'>
        <div className="row ">
          <div className="row d-flex text-center d-flex justify-content-evenly m-0" id='HeroSection'>
            <div className="col-12 col-sm-12 col-lg-5 col-xl-4 mt-5 mb-3">
              <img src="../assets/img2.jpg" alt="" className='img-fluid rounded-2' />
            </div>
            <div className="col-12 col-sm-12 col-lg-5 col-xl-5 mt-5  text-center  ">
              <h1 id='blob'>Welcome to PhotoPallete</h1>
              <p id='ok'>where your memories find a colorful home. Easily upload, organize, and relive your favorite moments all in one place</p>
              <Link to={"/signup"} className='btn btn-light text-dark'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <Wave1 />
      <Footer/>
    </>
  )
}

export default LandingPage