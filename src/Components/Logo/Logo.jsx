import React from 'react'
import logo from '../../assets/logo.jpg'

const Logo = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <img className='w-10 h-10 rounded-full' src={logo} alt="logo" />

        <h2 className='text-2xl font-bold max-sm:hidden'>BookCourier</h2>
    </div>
  )
}

export default Logo