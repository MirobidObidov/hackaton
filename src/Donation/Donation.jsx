import React from 'react'
import './Donation.css'
import don from './don.png'

const Donation = () => {
  return (
    <>
        <p className='her'>Donations</p>
        <div className="divv">
            <p className='herr'>donate for the development of roads and the construction and promotion of roads and the city as a whole</p>
        </div>
        <div className="ddiv">
            <img src={don} alt="" />
        </div>
        <div className="divv">
            <button className='butt'>Donation Now</button>
        </div>
        <div className="divv">
            <p className='pp'>4444 - 4424 - 2424 - 2242</p>
        </div>
    </>
  )
}

export default Donation