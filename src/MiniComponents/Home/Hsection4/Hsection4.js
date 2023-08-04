import React, { useEffect } from 'react'
import "./section.css"
import Sec4Box1 from "../../../assets/images/sec4Box1.webp";
import Sec4Box2 from "../../../assets/images/sec4Box2.webp";
import Sec4Box3 from "../../../assets/images/sec4Box3.webp";
import { AiOutlineHeart } from "react-icons/ai"
import Aos from 'aos'
import "aos/dist/aos.css"

const boxes = [
    {
        id: Math.random(),
        img: Sec4Box1,
        title: 'Education for every child',
        text: "Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.",
    },
    {
        id: Math.random(),
        img: Sec4Box2,
        title: 'Feeding the hungry people',
        text: "Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.",
    },
    {
        id: Math.random(),
        img: Sec4Box3,
        title: 'Providing cloth people',
        text: "Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.",
    }
]


const Hsection4 = () => {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <section className='sec4'>
        <div className='sec4-texts'>
            <p className='sec4-title'>Featured Causes</p>
            <p className='sec4-text'>Creepeth called face upon face yielding midst is after moveth</p>
        </div>
        <div className='sec4-boxes'>
            {
                boxes.map(item => (
                    <div className='sec4-box' key={item.id} data-aos="zoom-out" data-aos-duration="1200">
                        <div className='sec4BoxImgPlace'>
                            <img className='sec4BoxImg' src={item.img} alt="" />
                        </div>
                        <div className='sec4BoxTexts'>
                            <p className='sec4BoxTitle'>{item.title}</p>
                            <p className='sec4BoxText'>{item.text}</p>
                            <div className='price-place'>
                                <p className='sec4Box1533'>Raised: $1533</p>
                                <p className='sec4Box2500'>Goal: $2500</p>
                            </div>
                            <div className='btns-place'>
                                <div className='sec4-btn'>DONATE</div>
                                <p className='sec4Box90'> <AiOutlineHeart /> 90 Donors</p>
                            </div>
                        </div>
                    </div>
                )) 
            }
        </div>
    </section>
  )
}

export { Hsection4 }
