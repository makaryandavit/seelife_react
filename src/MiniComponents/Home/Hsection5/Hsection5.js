import React, { useEffect } from 'react'
import "./section.css"
import Sec5Box1 from "../../../assets/images/sec5Box1.webp"
import Sec5Box2 from "../../../assets/images/sec5Box2.webp"
import Sec5Box3 from "../../../assets/images/sec5Box3.webp"
import Sec5Box4 from "../../../assets/images/sec5Box4.webp"
import Aos from 'aos'
import "aos/dist/aos.css"



const boxes = [
    {
        id: Math.random(),
        img: Sec5Box1,
        title: 'Working syrian childreen',
        text: "Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        aos: 'zoom-in',
    },
    {
        id: Math.random(),
        img: Sec5Box2,
        title: "Help and homelesness",
        text: "Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        aos: 'zoom-in',
    },
    {
        id: Math.random(),
        img: Sec5Box3,
        title: "Save the clean water",
        text: "Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        aos: 'zoom-in',
    },
    {
        id: Math.random(),
        img: Sec5Box4,
        title: "Foods for poor childreen",
        text: "Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        aos: 'zoom-in',
    }
]

const Hsection5 = () => {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <section className='sec5'>
        <div className='sec5-texts'>
            <p className='sec5-title'>Upcoming Events</p>
            <p className='sec5-text'>Creepeth called face upon face yielding midst is after moveth</p>
        </div>
        <div className='sec5-boxes'>
            {
                boxes.map(item => (
                    <div className='sec5Box' key={item.id} data-aos={item.aos} data-aos-duration="1200">
                        <div className='sec5BoxImgPlace'>
                            <img className='sec5BoxImg' src={item.img} alt="" />
                        </div>
                        <div className='sec5BoxTexts'>
                            <p className='sec5BoxTitle'>{item.title}</p>
                            <p className='sec5BoxText'>{item.text}</p>
                            <div className='dates'>
                                <p><span className='numberDate'>229</span> <br/> Days</p>
                                <p><span className='numberDate'>23</span> <br/> Hours</p>
                                <p><span className='numberDate'>56</span> <br/> Minutes</p>
                                <p><span className='numberDate'>20</span> <br/> Seconds</p>
                            </div>
                            <div className='sec5-btn'>LEARN MORE</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export { Hsection5 }
