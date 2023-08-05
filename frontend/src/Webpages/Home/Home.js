import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
  import React, { Fragment } from 'react';
  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';

  import Carousels from '../../components/Carousel/Carousels.js';
  import EventCards from '../../components/Cards/EventCards.js';
  import CallToAction from '../../components/CallAction/CallToAction.js';
  import CounterSection from '../../components/Countsection/CounterSection.js';
  const Home=()=>{

    return(
        <Fragment>
        <Carousels/>
        <EventCards/>
        <CallToAction/>
        <CounterSection/>
        </Fragment>
    )
  }

export default Home;