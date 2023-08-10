import React from 'react'
import { Link } from 'react-router-dom'
import './carbon.css'
const CarbonCredits = () => {
  return (
    <div>
    <div className="container">
    <div className="headings">
      <h1>CARBON</h1>
      <h2 data-text="Credits">Credits</h2>
    </div>
    
    <h3>What & why?</h3>
    <p>
      The proper management of waste is a critical aspect of environmental sustainability. With the increasing global concern about climate change and the need to reduce greenhouse gas emissions,we focus on minimizing carbon footprints.
      Carbon credits are tradable certificates or permits that represent a reduction of greenhouse gas emissions. These credits are earned by organizations or projects that take actions to reduce their carbon footprint, and they can be bought and sold in carbon markets. By investing in our project that reduce carbon emissions, businesses and governments can offset their own emissions and work towards meeting our sustainability goals.
    </p>
<section>
    <div className="join">
        <button><Link to="/contactus" >Contact Us</Link></button>
    </div>
</section>

<div className="thanks">
  <p >Thank you for visiting our webpage !</p>

</div>

  </div>
  </div>
  )
}

export default CarbonCredits