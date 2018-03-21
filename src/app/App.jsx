import React from 'react'
import Header from './components/common/Header'
import qutub from '../images/qutub.jpg'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <h1>Hello Reactor!</h1>
        <br />
        <img src={qutub} width='300' />
      </div>
    </React.Fragment>
  )
}

export default App
