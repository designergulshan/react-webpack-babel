import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className='pull-left'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Modules</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Others</a>
        </li>
      </ul>

      <ul className='pull-right'>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
