import React, { Component } from "react";
import axios from "axios";
import FormField from "../bulma/FormField";
import CenteredCard from "../bulma/CenteredCard";

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let d = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      confirm_success_url: "/"
    }
    axios.post('/auth', d)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render(){
    return(
      <CenteredCard>
        <h1 className="title is-1">Sign up for an account</h1>
        <form onSubmit={this.handleSubmit}>
          <FormField label="Email">
            <input
              className="input"
              id="email"
              // name="email"
              type="text"
              placeholder="Enter email here..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Password">
            <input
              className="input"
              id="password"
              // name="password"
              type="password"
              placeholder="Enter password here..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Confirm Password">
            <input
              className="input"
              id="password_confirmation"
              // name="password_confirmation"
              type="password"
              placeholder="Retype password here..."
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </FormField>
          <button className="button is-primary" type="submit">Submit</button>
        </form>
      </CenteredCard>
    )
  }
}

export default SignUpForm;