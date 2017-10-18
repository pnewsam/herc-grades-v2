import React from 'react';
import { Link } from 'react-router-dom';

import { store } from '../../index.js';

const UserDash = () => {
  let user = store.getState().session.currentUser;
  if (user) {
    return (
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            You are logged in as <Link to="">{user}</Link>
          </p>
          <div className="control">
            <button className="button is-danger" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <div className="control">
          <Link to="/login">
            <button className="button is-primary">Login</button>
          </Link>
        </div>
        <div className="control">
          <Link to="/sign_up">
            <button className="button is-info">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
