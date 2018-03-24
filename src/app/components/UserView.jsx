import React from 'react'
import PropTypes from 'prop-types'

const UserView = ({ user, moreInfo }) => {
  const { address } = user
  window.console.log(user)
  
  return (
    <li>
      <h4>{user.name}</h4>
      <small>
        <a target='_blank' href={`mailto:${user.email}`}>{user.email}</a>
        <br/>
        <span className='username'>{user.username}</span>
        <br/>
        <a href={`http://www.${user.website}`} className='username'>{user.website}</a>
        {moreInfo && <div>
          <ul>
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
          </ul>
        </div>}
      </small>
    </li>
  )
}

UserView.propTypes = {
  user: PropTypes.object.isRequired,
  moreInfo: PropTypes.bool.isRequired
}

export default UserView