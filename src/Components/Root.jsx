import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto max-sm:max-w-fit'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root