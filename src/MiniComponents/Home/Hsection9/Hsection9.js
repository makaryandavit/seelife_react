import React from 'react'
import "./section.css"

const Hsection9 = () => {
  return (
    <section className='sec9'>
      <div className='sec9-inside'>
        <div className='sec9-left'>
            <p className='sec9-title'>Do you have a <br/> question?</p>
        </div>
        <div className='sec9-right'>
            <input type="text" className='sec9-inp' placeholder='Email Address ' />
            <div className='sec9-btn'>SUBSCRIBE</div>
        </div>
      </div>
    </section>
  )
}

export { Hsection9 }
