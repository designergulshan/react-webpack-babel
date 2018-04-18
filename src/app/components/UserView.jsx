import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserView extends Component {
  render() {
    const { user, moreInfo, showTitle } = this.props
    const { address } = user

    return (
      <li>
        <h4>{user.name}</h4>
        <small>
          <a target='_blank' href={`mailto:${user.email}`}>{user.email}</a>
          <br/>
          <span className='username'>{user.username}</span>
          <br/>
          <a href={`http://www.${user.website}`} className='username'>{user.website}</a>
          {moreInfo && <ul>
            <li>
              <strong>Street:</strong> {address.street}
            </li>
            <li>
              <strong>City:</strong> {address.city}
            </li>
            <li>
              <strong>Suite:</strong> {address.suite}
            </li>
            <li>
              <strong>Zipcode:</strong> {address.zipcode}
            </li>
          </ul>}
        </small>
        <br/><br/>
        <button className='btn' onClick={() => showTitle(user.name)}>Click me</button>
      </li>
    )
  }
}

UserView.propTypes = {
  user: PropTypes.object.isRequired,
  moreInfo: PropTypes.bool.isRequired,
  showTitle: PropTypes.func.isRequired
}

export default UserView