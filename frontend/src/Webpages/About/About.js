import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
  import './about.css'
  import React, { Fragment } from 'react';
  import i1 from './OIP.jpeg'
  import i2 from './OIP(1).jpeg'
  import i3 from './OIP(2).jpeg'
  import i4 from './OIP(3).jpeg'
  import i5 from './OIP(4).jpeg'

  const About=()=>{
    return(
      <div className="container">
      <section>

          <h1 className="heading">About Us</h1>
  <div className="content">
      <div className="p">

          <p >
              Welcome to Waste Management System, your reliable partner in sustainable waste management.
              We are committed to providing innovative and eco-friendly waste management services to businesses,
              industries, and communities alike.
          </p>
      </div>
      <div className="image">
          <img src={i1} alt="" />

      </div>
  </div>
         
          <button>READ MORE</button>

      </section>
      <section>

  <div className="content">
     
      <div className="image">
          <img src={i2} alt="" />

      </div>
      <div className="p">

          <p >
              Our mission is to minimize the environmental impact of waste while maximizing resource recovery.
          Through cutting-edge technologies and dedicated teamwork, we strive to create a cleaner and greener
          future for generations to come.
          </p>
      </div>
  </div>
         

      </section>
      <section>

       
  <div className="content">
      <div className="p">
          <p >
              At Waste Management System, we offer a wide range of waste management services, including
              recycling, waste collection, waste treatment, and disposal. We cater to the unique needs of each
              client, ensuring that our solutions are cost-effective and environmentally responsible.
          </p>
      </div>
      <div className="image">
          <img src={i4} alt="" />
          
      </div>
  </div>
  
  
  
</section>
<section>
  
  
  <div className="content">
      <div className="image">
          <img src={i5} alt="" />

      </div>
      <div className="p">
          
          
          <p >
              Our team of experts is passionate about sustainability and waste reduction. We continuously explore
          new methods and technologies to optimize waste management processes, promoting the circular economy
          and a more sustainable future.
          </p>
      </div>
      
  </div>
         
         

      </section>
<section>
  
  
  <div className="content">
      <div className="p">
          
          <p>
              Join us in our journey towards a cleaner planet. Together, we can make a significant difference and
              preserve our environment for generations to come.
          </p>
      </div>
      <div className="image">
          <img src={i3} alt="" />

      </div>
  </div>
         
         

      </section>
     
      <div className="thanks">

          <p>
              Thank you for choosing Waste Management System. We look forward to working with you!
          </p>
      </div>
  </div>
    )
  }
  export default About;