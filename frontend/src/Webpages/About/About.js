import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
  import React, { Fragment } from 'react';
  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';

  const About=()=>{
    return(
        <h1>About</h1>
    )
  }
  export default About;