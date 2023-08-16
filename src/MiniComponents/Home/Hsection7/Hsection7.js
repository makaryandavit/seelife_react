import React, { useEffect } from 'react'
import "./section.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Hsection7 = () => {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <section className='sec7'>
        <p className='sec7-title'>Become a volunteer</p>
        <p className='sec7-text'>So seed seed green that winged cattle in. Gathering thing made fly you're divided deep leave on <br/> the medicene moved us land years living.</p>
        <div className='sec7-btn' data-aos="flip-up" data-aos-duration="1200">JOIN WITH US</div>
    </section>
  )
}

export { Hsection7 }