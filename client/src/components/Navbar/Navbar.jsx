import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/sessionActions';
import {
  fetchStart,
  fetchSuccess,
  fetchFailure
} from '../../actions/apiActions';
import { showFlash, hideFlash } from '../../actions/flashActions';
import NavbarBurger from './NavbarBurger';
import NavbarMenu from './NavbarMenu';
import { store } from '../../index';
import axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.state = {
      burgerIsActive: false
    };
  }

  handleBurgerClick() {
    let active;
    if (this.state.burgerIsActive) {
      active = false;
    } else {
      active = true;
    }
    this.setState({ burgerIsActive: active });
  }

  handleLogout() {
    store.dispatch(dispatch => {
      dispatch(fetchStart());
      axios({
        method: 'delete',
        url: '/auth/sign_out',
        data: {
          uid: sessionStorage.getItem('uid'),
          client: sessionStorage.getItem('client'),
          'access-token': sessionStorage.getItem('access-token')
        }
      })
        .then(response => {
          dispatch(logoutUser());
          dispatch(fetchSuccess(response.body));
          dispatch(showFlash('Logout successful!', 'success'));
          setTimeout(() => {
            dispatch(hideFlash());
          }, 3000);
          sessionStorage.clear();
        })
        .catch(error => dispatch(fetchFailure(error.response.data.errors[0])));
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">Herc Grades</Link>
          </div>
          <NavbarBurger
            isActive={this.state.burgerIsActive}
            handleClick={this.handleBurgerClick}
          />
        </div>
        <NavbarMenu isActive={this.state.burgerIsActive}>
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="control">
                <Link to="/login">
                  <button className="button is-primary">Login</button>
                </Link>
              </div>
              <div className="control">
                <button
                  className="button is-danger"
                  onClick={this.handleLogout}
                >
                  Logout
                </button>
              </div>
              <div className="control">
                <Link to="/sign_up">
                  <button className="button is-info">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </NavbarMenu>
      </nav>
    );
  }
}

export default Navbar;
