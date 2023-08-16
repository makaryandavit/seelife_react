import React, { useEffect } from 'react'
import "./section.css"
import Box1 from "../../../assets/images/sec8Box1.webp"
import Box2 from "../../../assets/images/sec8Box2.webp"
import Box3 from "../../../assets/images/sec8Box3.webp"
import { LiaCalendarAlt } from "react-icons/lia"
import { BiBookAlt } from "react-icons/bi"
import Aos from 'aos'
import "aos/dist/aos.css"

const boxes = [
    {
        id: Math.random(),
        img: Box1,
        date: "20th Sep, 2018",
        date_title: "Company",
        title: "Lime recalls electric scooters over battery fire.",
        aos: 'zoom-out'
    },
    {
        id: Math.random(),
        img: Box2,
        date: "20th Sep, 2018",
        date_title: "Company",
        title: "Apple resorts to promo deals trade to boost",
        aos: 'zoom-out'
    },
    {
        id: Math.random(),
        img: Box3,
        date: "20th Sep, 2018",
        date_title: "Company",
        title: "Lime recalls electric scooters over battery fire.",
        aos: 'zoom-out'
    }
]

const Hsection8 = () => {

    useEffect(() => {
        Aos.init();
    },[])

  return (
    <section className='sec8'>
      <div className='sec8-texts'>
        <p className='sec8-title'>Our Latest Story</p>
        <p className='sec8-text'>Open lesser winged midst wherein may morning</p>
      </div>
      <div className='sec8-boxes'>
        {
            boxes.map(item => (
                <div className='sec8Box' key={item.id} data-aos={item.aos} data-aos-duration="1200">
                    <div className='sec8BoxImgPlace'>
                        <img className='sec8BoxImg' src={item.img} alt="" />
                    </div>
                    <div className='sec8BoxDates'>
                        <p className='dates-left'>
                            <LiaCalendarAlt />
                            {item.date}
                        </p>
                        <p className='dates-right'>
                            <BiBookAlt />
                            {item.date_title}
                        </p>
                    </div>
                    <p className='sec8BoxTitle'>{item.title}</p>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export { Hsection8 }
