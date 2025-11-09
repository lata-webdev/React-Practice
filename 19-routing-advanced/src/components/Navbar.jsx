import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='font-bold text-2xl'>Lata</h2>
      <div className='flex gap-10'>
        <Link className='font-medium' to='/'>Home</Link>
        <Link className='font-medium' to='/about'>About</Link>
        <Link className='font-medium' to='/courses'>Courses</Link>
        <Link className='font-medium' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
