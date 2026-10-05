import React from 'react'
const BackgroundImage = '/static/media/Strip-2.563efaee40f6d40523f2.jpg';import { Link } from 'react-router-dom'
import "./StayWithUs.css"

const StayWithUs = () => {
  return (
 <div className="stay-with-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="stay-with-content">
       
        <h1>Step Into Quality, Step Into Success</h1>
        <Link to="/dealer">
          <button className='stay-button'>
Become a Dealer
  <span className="stay-button-circle">
    <i className="fa fa-arrow-up"></i>
  </span>
</button>
</Link>
      </div>
    </div>
  )
}

export default StayWithUs
