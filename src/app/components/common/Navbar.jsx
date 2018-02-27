import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className='pull-left'>
        <li>
          <a target='_blank' href='https://reactjs.org/docs/hello-world.html'>Docs</a>
        </li>
        <li>
          <a target='_blank' href='https://reactjs.org/tutorial/tutorial.html'>Tutorial</a>
        </li>
        <li>
          <a target='_blank' href='https://reactjs.org/blog/'>Blog</a>
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
