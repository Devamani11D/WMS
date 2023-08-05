import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {createContext}  from 'react';
import "./Navbar.css"
function NavigationBar() {

    const loginContext=createContext([]);
    let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
    const [display,setdisplay]=useState(false);
  const activeLink = {
    color: "#ffaa00",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const inactiveLink = {
    color: "#EEF0F2",
    fontSize: "1.2rem",
  };


  return (
    <nav className="navbar navbar-expand-sm navbar-dark nav-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/WLM_logo-2.svg/404px-WLM_logo-2.svg.png"
            width="60px"
            className="shadow"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={(e)=>{
            setdisplay(!display);
          }}
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class={`mobile_screen_navbar`}>
            <ul class="mobile_screen_ul">
                <li><a href="shop.html">Shop</a></li>
                <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                <li id="navbar_icon"><i class="fa-solid fa-square-caret-down fa-lg nav_icon"></i>
                    <div id="drop_down_menu_nav" class="nonedisplay">
                    <ul>
                        <li><a href="home.html" class="home navitem">Home</a></li>
                        <li><a href="#" class="blog navitem">Blog</a></li>
                        <li><a href="#" class="about navitem">About</a></li>
                        <li><a href="#" class="contact navitem">Contacts</a></li>
    
                    </ul>
                    </div>
                </li>
            </ul>
        </div>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Register
              </NavLink>
            </li>

            {!userLoginStatus ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                  onClick={logoutUser}
                >
                  Logout
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutus"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Aboutus
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;