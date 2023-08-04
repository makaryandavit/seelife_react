import React from 'react'
import { Outlet } from 'react-router-dom'
import "./layout.css"
import { Header } from '../Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer></footer>
    </>
  )
}

export { Layout }
