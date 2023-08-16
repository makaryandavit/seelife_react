import React, { useState } from 'react'
import "./header.css"
import Logo from "../../assets/images/logo.png.webp"
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from '../Dropdown/Dropdown'
import BurgerDropdown from '../../MiniComponents/BurgerDropdown/BurgerDropdown'

const links = [
    {
        id: Math.random(),
        name: 'HOME',
        path: '/',
        dropdown: false,
    },
    {
        id: Math.random(),
        name: 'ABOUT',
        path: '/about',
        dropdown: false,
    },
    {
        id: Math.random(),
        name: 'CAUSES',
        path: '/causes',
        dropdown: false,
    },
    {
        id: Math.random(),
        name: 'PAGES',
        path: '#',
        dropdown: true,
        changeAble: false,
        dropItems: ['Events','Events Details','Elements'],
    },
    {
        id: Math.random(),
        name: 'BLOG',
        path: '/blog',
        dropdown: false,
    },
    {
        id: Math.random(),
        name: 'CONTACT',
        path: '/contact',
        dropdown: false,
    },
]

const Header = () => {


    const [isOpen,setIsOpen] = useState(false)


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
                            <li key={item.id} className='listLink'>
                                <NavLink className={item.dropdown ? 'link notActive' : 'link'} to={item.path} >{item.name}</NavLink>
                                {
                                    item.dropdown ? <Dropdown dropItems={item.dropItems} /> : ''
                                }
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
                                        <NavLink className={item.dropdown ? 'link notActive' : 'link'} to={item.path} onClick={() => {
                                            item.dropdown ? setBurger(true) : setBurger(false)
                                            item.name == 'PAGES' ? setIsOpen(!isOpen) : setIsOpen(false)
                                        }}>{item.name}</NavLink>
                                        {
                                            item.dropdown && isOpen ? <BurgerDropdown burger={burger} burgerDrop={item.dropItems} /> : ''
                                        }
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
