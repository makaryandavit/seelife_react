import React, { useEffect } from 'react'
import "./section.css"
import User1 from "../../../assets/images/user1.webp"
import User2 from "../../../assets/images/user2.webp"
import User3 from "../../../assets/images/user3.webp"
import User4 from "../../../assets/images/user4.webp"
import {TfiFacebook} from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoInstagram } from "react-icons/bi"
import { CgMail } from "react-icons/cg"
import Aos from 'aos'
import "aos/dist/aos.css"

const users = [
  {
    id: Math.random(),
    img: User1,
    name: "Alea Mirslava",
    secondName: "Party Manager",
    text: "So seed seed green that winged cattle in kath moved us land years living.",
    aos: 'zoom-in'
  },
  {
    id: Math.random(),
    img: User2,
    name: "Adam Virland",
    secondName: "Party Manager",
    text: "So seed seed green that winged cattle in kath moved us land years living.",
    aos: 'zoom-in'
  },
  {
    id: Math.random(),
    img: User3,
    name: "Adam Virland",
    secondName: "Party Manager",
    text: "So seed seed green that winged cattle in kath moved us land years living.",
    aos: 'zoom-in'
  },
  {
    id: Math.random(),
    img: User4,
    name: "Adam Virland",
    secondName: "Party Manager",
    text: "So seed seed green that winged cattle in kath moved us land years living.",
    aos: 'zoom-in'
  }
]


const Hsection6 = () => {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <section className='sec6'>
      <div className='sec6-texts'>
        <p className='sec6-title'>Meet Our Voluteer</p>
        <p className='sec6-text'>Creepeth called face upon face yielding midst is after moveth</p>
      </div>
      <div className='sec6-boxes'>
        {
          users.map(item => (
            <div className='sec6Box' key={item.id} data-aos={item.aos} data-aos-duration="1200">
                <div className='sec6BoxImgPlace'>
                  <img className='userImg' src={item.img} alt="" />
                </div>
                <div className='sec6BoxTexts'>
                  <p className='sec6BoxTitle'>{item.name}</p>
                  <p className='sec6BoxReTitle'>{item.secondName}</p>
                  <p className='sec6BoxText'>{item.text}</p>
                  <div className='social'>
                    <div className='round'>
                      <TfiFacebook className='icon' />
                    </div>
                    <div className='round'>
                      <AiOutlineTwitter className='icon' />
                    </div>
                    <div className='round'>
                      <BiLogoInstagram className='icon' />
                    </div>
                    <div className='round'>
                      <CgMail className='icon'/>
                    </div>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export { Hsection6 }
