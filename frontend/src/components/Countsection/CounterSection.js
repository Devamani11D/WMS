import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from './main.js';
import "./style.css"
const CounterSection=()=>{
    return(
        <Fragment>
        <div class="counter-wrapper">
            <div class="counter">
                <h1 className="count" data-target="1254">0</h1>
                <p>New Visiters Every Week</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="12168">0</h1>
                <p>Happy customers every year</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="2172">0</h1>
                <p>Won Amazing Awards</p>
            </div>
            <div class="counter">
                <h1 className="count" data-target="732">0</h1>
                <p>New Listing Every Week</p>
            </div>
        </div>
        <Counter/>
        </Fragment>
    )
}

export default CounterSection;