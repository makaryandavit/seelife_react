import React from 'react'
import { Outlet } from 'react-router-dom'
import "./layout.css"
import { Header } from '../Header'
import { Footer } from '../Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout }
