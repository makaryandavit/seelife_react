import React, { useEffect } from 'react'
import "./section.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Hsection3 = () => {

    useEffect(() => {
      Aos.init()
  },[])

  return (
    <section className='sec3'>
        <div className='sec3-left' data-aos="zoom-in" data-aos-duration="1200"></div>
        <div className='sec3-right' data-aos="zoom-in" data-aos-duration="1200">
            <p className='sec3-title'>We are nonprofit team and work worldwide</p>
            <p className='sec3-text'>Their multiply doesn't behold shall appear living heaven second roo lights. Itself hath thing for won't herb forth gathered good bear fowl kind give fly form winged for reason
            <br/> <br/>
                Land their given the seasons herb lights fowl beast whales it after multiply fifth under to it waters waters created heaven very fill agenc to. Dry creepeth subdue them kind night behold rule stars him grass waters our without</p>
            <div className='sec3-btn'>LEARN MORE</div>
        </div>
    </section>
  )
}

export { Hsection3 }
