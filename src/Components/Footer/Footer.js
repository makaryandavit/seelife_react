import React from 'react'
import "./footer.css"
import { LuSend } from "react-icons/lu";
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className='footer-bottom'>
        <div className='contacts'>
          <div className='headOffice'>
              <LuSend  className='footer-icon'/>
              <p className='foot-title'>Head Office</p>
              <p className='foot-text'>123, Main Street, Your City</p>
          </div>
          <div className='phoneNumber'>
            <BsTelephoneFill  className='footer-icon'/>
              <p className='foot-title'>Phone Number</p>
              <p className='foot-text'>+123 456 7890</p>
              <p className='foot-text'>123, Main Street, Your City</p>
          </div>
          <div className='email'>
            <BsEnvelopeFill  className='footer-icon'/>
            <p className='foot-title'>Email</p>
            <p className='foot-text'>free@infoexample.com</p>
            <p className='foot-text'>www.infoexample.com</p>
          </div>
      </div>
          <div className='footer-texts'>
            <p className='footer-title'>Our Mission</p>
            <p className='footer-text'>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved</p>
            <p className='footer-text'>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.

So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24380.582969499585!2d44.519745500000006!3d40.1963181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1691575947711!5m2!1sen!2sam"></iframe>
      </div>
    </footer>
  )
}

export { Footer }
