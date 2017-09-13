import React, { Component } from "react";
import axios from "axios";
import FormField from "../bulma/FormField";
import CenteredCard from "../bulma/CenteredCard";

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/auth/sign_in', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      console.log(response);
      sessionStorage.setItem("access-token", response.headers["access-token"]);
      sessionStorage.setItem("client", response.headers["client"]);
      sessionStorage.setItem("expiry", response.headers["expiry"]);
      sessionStorage.setItem("uid", response.headers["uid"]);
    })
    .catch(error => console.log(error));
  }

  render(){
    return(
      <CenteredCard>
        <h1 className="title is-1 has-text-centered">Log in to your account</h1>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <FormField label="Email">
            <input
              className="input"
              id="email"
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
              type="password"
              placeholder="Enter password here..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormField>
          <button className="button is-primary" type="submit">Submit</button>
        </form>
      </CenteredCard>
    )
  }
}

export default LoginForm;