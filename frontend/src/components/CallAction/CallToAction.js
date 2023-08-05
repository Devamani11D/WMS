import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./callactions.css";
const CallToAction=()=>{
    return(
        <section id="call_to_action">
        <div id="call_to_act_cont"  class="reveal_it">
            <h4>Repair Services</h4>
            <p>Up to <span id="call_to_act_span">70% OFF</span>- ALL T-Shirts & Accessories</p>
            <div class="button">
            <button>Explore More</button>
            </div>

        </div>
    </section>
    )
}

export default CallToAction;