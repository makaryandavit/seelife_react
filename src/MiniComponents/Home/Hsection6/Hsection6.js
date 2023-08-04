import React from 'react'
import "./section.css"
import User1 from "../../../assets/images/user1.webp"
import TfiFacebook from "react-icons/tfi";

const Hsection6 = () => {
  return (
    <section className='sec6'>
      <div className='sec6-texts'>
        <p className='sec6-title'>Meet Our Voluteer</p>
        <p className='sec6-text'>Creepeth called face upon face yielding midst is after moveth</p>
      </div>
      <div className='sec6-boxes'>
        <div className='sec6Box'>
          <div className='sec6BoxImgPlace'>
            <img className='userImg' src={User1} alt="User1" />
          </div>
          <div className='sec6BoxTexts'>
            <p className='sec6BoxTitle'>Alea Mirslava</p>
            <p className='sec6BoxReTitle'>Party Manager</p>
            <p className='sec6BoxText'>So seed seed green that winged cattle in kath moved us land years living.</p>
            <div className='social'>
              <div className='round'>
                {/* <TfiFacebook /> */}
              </div>
              <div className='round'>
                
              </div>
              <div className='round'>
                
              </div>
              <div className='round'>
                
              </div>
            </div>
          </div>
        </div>
        <div className='sec6Box'></div>
        <div className='sec6Box'></div>
        <div className='sec6Box'></div>
      </div>
    </section>
  )
}

export { Hsection6 }
