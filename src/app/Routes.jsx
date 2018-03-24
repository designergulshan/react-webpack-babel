import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import FormPage from './pages/FormPage'

const Routes = () => {
  return (
    <main className='page-body'>
      <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/form' component={FormPage} />
      </div>
    </main>
  )
}

export default Routes