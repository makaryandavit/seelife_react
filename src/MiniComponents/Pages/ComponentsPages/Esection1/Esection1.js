import React from 'react'
import "./section.css"
import { FaCalendarAlt } from "react-icons/fa"
import { BiSolidHome } from "react-icons/bi"
import { FaLocationArrow } from "react-icons/fa"

const Esection1 = () => {
  return (
    <section className='e_sec1'>
      <div className='eSec1-left'></div>
      <div className='eSec1-right'>
        <p className='e-title'>Homeless man sues couple who raised for him</p>
        <p className='e-text'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each. If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see.</p>
        <p className='e-text'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each. If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see.</p>
        <p className='e-social'>
          <FaCalendarAlt />
          Saturday, 15th September, 2018</p>
        <p className='e-social'>
          <BiSolidHome />
          Rocky beach Church</p>
        <p className='e-social'>
          <FaLocationArrow />
          Los Angeles, USA.</p>
      </div>
    </section>
  )
}

export { Esection1 }
