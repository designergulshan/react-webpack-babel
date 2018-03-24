import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 className='logo'>
        <Link to='/'>Reactor<sup>0.1</sup></Link>
      </h1>
      <Navbar />
    </header>
  )
}


export default Header
