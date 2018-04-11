import React, { Component } from 'react'

class QuestionsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      email: '',
      feedback: '',
      items: 'third',
      terms: false
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  changeHandler(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      [name]: value
    })
  }

  formSubmit(e) {
    e.preventDefault()
    window.console.log(this.state)
  }

  render() {
    const { userName, email, feedback, items, terms } = this.state

    return (
      <div className='questions-page'>
        <h1 className='page-title'>Questions</h1>
        <form className='default-form' onSubmit={this.formSubmit}>
          <div className='form-row'>
            <label htmlFor='userName'>Name:</label>
            <input
              name='userName'
              id='userName'
              type='text'
              className='form-input'
              value={userName}
              onChange={this.changeHandler}
            />
          </div>
          
          <div className='form-row'>
            <label htmlFor='email'>Email:</label>
            <input
              name='email'
              id='email'
              type='text'
              className='form-input'
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          
          <div className='form-row'>
            <label htmlFor='feedback'>Feedback:</label>
            <textarea
              name='feedback'
              id='feedback'
              className='form-input'
              value={feedback}
              onChange={this.changeHandler}
            />
          </div>
          
          <div className='form-row'>
            <label htmlFor='items'>items:</label>
            <select
              id='items'
              name='items'
              value={items}
              onChange={this.changeHandler}
            >
              <option value='first'>First</option>
              <option value='second'>Second</option>
              <option value='third'>Third</option>
            </select>
          </div>
          
          <div className='form-row'>
            <label htmlFor='terms'>
              <input
                onChange={this.changeHandler}
                name='terms'
                id='terms'
                type='checkbox'
                checked={terms ? 'true' : ''}
              /> Terms and Conditions
            </label>
          </div>

          <button disabled={terms ? '' : 'disabled'} className='btn' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default QuestionsPage