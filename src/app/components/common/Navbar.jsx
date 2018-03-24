import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='pull-left'>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li>
          <NavLink to='/form'>Form</NavLink>
        </li>
      </ul>

      <ul className='pull-right'>
        <li>
          <span>It's me :)</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
