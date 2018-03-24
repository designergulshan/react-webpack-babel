import React from 'react'
import qutub from '../../images/qutub.jpg'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 className='page-title'>Hello Reactor!</h1>
      <img src={qutub} width='300' />
    </div>
  )
}

export default HomePage