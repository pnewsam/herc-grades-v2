import React, { Component } from 'react';
import axios from 'axios';
import FormField from '../bulma/FormField';
import CenteredCard from '../bulma/CenteredCard';
import { store } from '../../index';
import { setBrowserSession } from '../../utils/authUtil';
import { loginUser } from '../../actions/sessionActions';
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from '../../actions/apiActions';
import { showFlash, hideFlash } from '../../actions/flashActions';
import SubmitButton from './SubmitButton';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    store.dispatch(dispatch => {
      dispatch(fetchStart());
      axios
        .post('/auth/sign_in', {
          email: this.state.email,
          password: this.state.password,
        })
        .then(response => {
          console.log(response.data);
          dispatch(fetchSuccess(response.data));
          dispatch(loginUser(response.data.data.email));
          dispatch(showFlash('Login successful!', 'success'));
          setTimeout(() => {
            dispatch(hideFlash());
          }, 3000);
          this.props.handleSuccess();
          setBrowserSession(response);
        })
        .catch(error => {
          console.log(error);
          dispatch(showFlash('Login unsuccessful!', 'danger'));
          setTimeout(() => {
            dispatch(hideFlash());
          }, 3000);
          store.dispatch(fetchFailure(error));
        });
    });
  }

  render() {
    return (
      <CenteredCard>
        <h1 className="title is-1 has-text-centered">Log in to your account</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <FormField label="Email">
            <input
              className="input"
              name="email"
              type="text"
              placeholder="Enter email here..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Password">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Enter password here..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormField>
          <SubmitButton isFetching={store.getState().api.isFetching} />
        </form>
      </CenteredCard>
    );
  }
}

export default LoginForm;
