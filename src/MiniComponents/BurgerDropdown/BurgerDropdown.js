import React from 'react'
import "./burgerDrop.css"
import { NavLink } from 'react-router-dom'

const BurgerDropdown = ({burgerDrop}) => {
  return (
    <div className='burgerDrop'>
      <ul>
        {
            burgerDrop.map(item => (
                <li key={Math.random()} className='drop-li'>
                    <NavLink className='drop-link dropik'  to={`/${item}`}>{item}</NavLink>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default BurgerDropdown
