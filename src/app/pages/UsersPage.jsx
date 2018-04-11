import React, { Component } from 'react'
import UserView from '../components/UserView'

class UsersPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
      moreInfo: false
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          users
        })
      })
  }

  handleClick() {
    this.setState(prevState => {
      return { moreInfo: !prevState.moreInfo }
    })
  }

  render() {
    const { users, moreInfo } = this.state
    // window.console.log(users)

    return (
      <div className='users-page'>
        <h1 className='page-title'>Users Page</h1>
        <button className='btn' onClick={this.handleClick}>{moreInfo ? 'Hide' : 'Show'} More Info</button>
        <ul className='usersList'>
          {users && users.map(user => (
            <UserView
              key={user.id}
              user={user}
              moreInfo={moreInfo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default UsersPage