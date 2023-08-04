import React, { useState } from 'react'
import "./header.css"
import Logo from "../../assets/images/logo.png.webp"
import { NavLink } from 'react-router-dom'


const links = [
    {
        id: Math.random(),
        name: 'HOME',
        path: '/',
    },
    {
        id: Math.random(),
        name: 'ABOUT',
        path: '/about',
    },
    {
        id: Math.random(),
        name: 'CAUSES',
        path: '/causes',
    },
    {
        id: Math.random(),
        name: 'PAGES',
        path: '/pages',
    },
    {
        id: Math.random(),
        name: 'BLOG',
        path: '/blog',
    },
    {
        id: Math.random(),
        name: 'CONTACT',
        path: '/contact',
    },
]

const Header = () => {

    const [burger,setBurger] = useState(false);
    const [headerScroll,setHeaderScroll] = useState(false)

    window.addEventListener('click',() =>{
        setBurger(false)
    })

    window.addEventListener('scroll',() =>{
        if(window.scrollY >= 400){
            setHeaderScroll(true)
        }else{
            setHeaderScroll(false)
        }
    })

  return (
    <header className={headerScroll ? 'headerScroll' : ''}>
        <nav>
            <div className="headerLeft ">
                <img src={Logo} alt="" />
            </div>
            <div className="headerRight">
                <ul className='header-ul'>
                    {
                        links.map(item => (
                            <li key={item.id}>
                                <NavLink className='link' to={item.path}>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="burger" onClick={(e) => {
                    e.stopPropagation()
                    setBurger(!burger)
                }}>
                    <div className="lines">
                        <div className={burger ? 'line line1Change' : 'line line1'}></div>
                        <div className={burger ? 'line line2Change' : 'line line2'}></div>
                        <div className={burger ? 'line line3Change' : 'line line3'}></div>
                    </div>
                    <div className={burger ? 'burger-content burgerContentChange' : 'burger-content'} onClick={(e) =>{
                        e.stopPropagation()
                    }}>
                        <ul className='burger-ul'>
                            {
                                links.map(item => (
                                    <li key={item.id} className='list'>
                                        <NavLink className='link' to={item.path} onClick={() => setBurger(false)}>{item.name}</NavLink>
                                    </li>
                                ))
                            }   
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export { Header }
