import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbars=()=>{
    return(
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">navbar</a>
          <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#"><Link to='/'>Home</Link></a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="#"><Link to='/about'>About</Link></a>
                  </li>
                <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="#contactUs"><Link to='/services'>Services</Link></a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="#login"><Link to='/contactus'>Contact Us</Link>
                    </a>
                  </li>
              </ul>

              <div class="d-flex
              flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <a href="#login" class="test-white">Login</a>
                <a href="#signup" class="text-white text-decoration-none px-3 py-1 rounded-4" style={{backgroundColor: "#f94ca4"}}>Sign Up</a>
              </div>
              {/* <!-- <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> --> */}
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbars;