import React, { Component } from 'react'

class FormPage extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userNameError: '',
      userEmail: '',
      userEmailError: '',
      userDetails: '',
      userDetailsError: '',
      terms: false,
      termsError: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  validate() {
    const { userName, userEmail } = this.state
    let isError = false
    const errors = {}

    if (userName.length < 5) {
      isError = true
      errors.userNameError = 'Username needs to be atleast 5 characters long.'
    }

    if (userEmail.indexOf('@') === -1) {
      isError = true
      errors.userEmailError = 'userEmail Should contains @'
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }

    return isError
  }

  handleSubmit(e) {
    e.preventDefault()
    const errs = this.validate()

    if (!errs) {
      this.setState({
        userName: '',
        userNameError: '',
        userEmail: '',
        userEmailError: '',
        userDetails: '',
        userDetailsError: '',
        terms: false,
        termsError: ''
      })

      const { userEmail, userName, userDetails } = this.state
      const postData = {
        userEmail,
        userName,
        userDetails
      }
      window.console.log(postData)
    }
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      userName,
      userNameError,
      userEmail,
      userEmailError,
      userDetails,
      userDetailsError,
      terms,
      termsError
    } = this.state
    return (
      <div className='home-page'>
        <h1 className='page-title'>Form Page!</h1>
        
        <form onSubmit={this.handleSubmit} className='default-form'>
          <div className='form-row'>
            <label htmlFor='userName'>Name:</label>
            <input
              name='userName'
              onChange={this.handleChange}
              className='form-input'
              type='text'
              id='userName'
              value={userName}
            />
            <span className='error'>{userNameError}</span>
          </div>
          
          <div className='form-row'>
            <label htmlFor='userEmail'>Email:</label>
            <input
              name='userEmail'
              onChange={this.handleChange}
              className='form-input'
              type='text'
              id='userEmail'
              value={userEmail}
            />
            <span className='error'>{userEmailError}</span>
          </div>
          
          <div className='form-row'>
            <label htmlFor='userDetails'>Details:</label>
            <textarea
              name='userDetails'
              onChange={this.handleChange}
              className='form-input'
              id='userDetails'
              value={userDetails}
            />
            <span className='error'>{userDetailsError}</span>
          </div>

          <div className='form-row'>
            <label htmlFor='terms'>
              <input
                onChange={this.handleChange}
                name='terms'
                id='terms'
                type='checkbox'
                checked={terms ? 'true' : ''}
              /> Terms and Conditions
            </label>
            <span className='error'>{termsError}</span>
          </div>

          <button disabled={terms ? '' : 'disabled'} className='btn' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default FormPage