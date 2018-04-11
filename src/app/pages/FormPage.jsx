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
      termsError: '',
      gender: ''
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
        termsError: '',
        gender: ''
      })

      const { userEmail, userName, userDetails, gender } = this.state
      const postData = {
        userEmail,
        userName,
        userDetails,
        gender
      }
      
      window.console.log(postData, this.state)
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
      termsError,
      gender
    } = this.state
    return (
      <div className='form-page'>
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
            {userNameError && <span className='error'>{userNameError}</span>}
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
            {userEmailError && <span className='error'>{userEmailError}</span>}
          </div>
          
          <div className='form-row'>
            <div>Gender:</div>

            <label>
              <input
                name='gender'
                type='radio'
                value='male'
                checked={gender === 'male'}
                onChange={this.handleChange}
              />
              &nbsp; Male:
            </label>

            <label>
              <input
                name='gender'
                type='radio'
                value='female'
                checked={gender === 'female'}
                onChange={this.handleChange}
              />
              &nbsp; Female
            </label>
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
            {userDetailsError && <span className='error'>{userDetailsError}</span>}
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
            {userDetailsError && <span className='error'>{termsError}</span>}
          </div>

          <button disabled={terms ? '' : 'disabled'} className='btn' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default FormPage