import React from 'react';
import PropTypes from 'prop-types';

class Users extends React.Component {
  render() {
    return (
      <div id="users">
        <h1>All Users</h1>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>{`${user.f_name} ${user.l_name}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
