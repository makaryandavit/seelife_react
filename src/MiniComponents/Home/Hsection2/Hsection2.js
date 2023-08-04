import React, { useEffect } from 'react'
import "./section.css"
import Box1 from "../../../assets/images/box1.webp"
import Box2 from "../../../assets/images/box2.webp"
import Box3 from "../../../assets/images/box3.webp"
import Aos from 'aos'
import "aos/dist/aos.css"

const boxes = [
    {
        id: Math.random(),
        title: 'Give Donation',
        text: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.",
        img: Box1,
        aos: 'fade-right',
    },
    {
        id: Math.random(),
        title: 'Give Inspiration',
        text: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.",
        img: Box2,
        aos: 'zoom-in',
    },
    {
        id: Math.random(),
        title: 'Become Bolunteer',
        text: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.",
        img: Box3,
        aos: 'fade-left',
    }
]

const Hsection2 = () => {

  useEffect(() => {
    Aos.init()
},[])

  return (
    <section className='sec2'>
      <div className='sec2-texts'>
        <p className='sec2-title'>Our Major Causes</p>
        <p className='sec2-text'>Creepeth called face upon face yielding midst is after moveth</p>
      </div>
      <div className='sec2-boxes'>
        {
            boxes.map(item => (
                <div className='sec2Box' key={item.id} data-aos={item.aos} data-aos-duration="1200">
                    <p className='sec2Box-title'>{item.title}</p>
                    <img className='sec2Box-img' src={item.img} alt="" />
                    <p className='sec2Box-text'>{item.text}</p>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export { Hsection2 }
