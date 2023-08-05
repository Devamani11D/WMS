import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EventCards=()=>{
    return(
        <div class="d-flex flex-row justify-content-center">
    <div class="card m-4 myowncard pb-4" style={{width: "18rem"}}>
        <img src="https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg" class="card-img-top w-150" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card m-4 myowncard pb-4" style={{width: "18rem"}}>
        <img src="https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card  m-4 myowncard pb-4" style={{width: "18rem"}}>
        <img src="https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    )
}

export default EventCards;