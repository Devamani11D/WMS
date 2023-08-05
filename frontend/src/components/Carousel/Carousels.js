import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Carousel.css'
import image1 from "../../assets/1st.jpeg"
import image2 from "../../assets/2nd.jpg"
import image3 from "../../assets/3rd.jpg"
const Carousels=()=>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={image1} class="d-block w-100" alt="slide1"/>
        <div class="container">
          <h1>Example</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eius provident placeat exercitationem autem
            tempora repellendus harum similique nulla nobis!</p>
          <a href="#" class="btn btn-large btn-primary">Sign Up Now</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src={image2} class="d-block w-100" alt="slide2"/>
        <div class="container">
          <h1>Example</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eius provident placeat exercitationem autem
            tempora repellendus harum similique nulla nobis!</p>
          <a href="#" class="btn btn-large btn-primary">Learn More</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src={image3} class="d-block w-100" alt="slide3"/>
        <div class="container">
          <h1>Example</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eius provident placeat exercitationem autem
            tempora repellendus harum similique nulla nobis!</p>
          <a href="#" class="btn btn-large btn-primary">View Gallery</a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    )
}

export default Carousels;