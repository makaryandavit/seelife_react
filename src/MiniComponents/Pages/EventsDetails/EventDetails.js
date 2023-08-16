import React from 'react'
import "./details.css"
import {Hsection7} from  "../../Home"
import { Esection1 } from '../ComponentsPages/Esection1/Esection1'

const EventDetails = () => {
  return (
    <>
        <section className='event-d'>
            <p className='events-title'>Events Details</p>
            <p className='events-text'>Platea nullam nostra laoreet potenti hendrerit laoreet enim nisl</p>
        </section>
        <Esection1 />
        <Hsection7 />

    </>
  )
}

export { EventDetails }
