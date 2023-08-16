import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Dropdown = ({dropItems}) => {

  return (


    <div className='dropdown'>
      <ul>
        {
            dropItems.map(item => (
                <li key={Math.random()} className='drop-li'>
                    <NavLink className='drop-link'  to={`/${item}`}>{item}</NavLink>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export { Dropdown }
