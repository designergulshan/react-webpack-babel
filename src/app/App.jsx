import React from 'react'
import Routes from './Routes'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  )
}

export default App
