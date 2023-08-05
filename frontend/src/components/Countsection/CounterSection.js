import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./style.css"
const CounterSection=()=>{
    return(
        <Fragment>
        <div class="counter-wrapper">
            <div class="counter">
                <h1 className="count" data-target="1254">2343+</h1>
                <p>New Visiters Every Week</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="12168">43+</h1>
                <p>Happy customers every year</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="2172">4334+</h1>
                <p>Won Amazing Awards</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="732">5783+</h1>
                <p>New Listing Every Week</p>
            </div>
        </div>
        <script src="./main.js"></script>
        </Fragment>
    )
}

export default CounterSection;