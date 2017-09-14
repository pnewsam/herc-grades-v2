import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.state = {
      success: false
    };
  }

  handleSuccess(){
    this.setState({success: true});
  }

  render(){
    return(
      this.state.success ? (
        <Redirect to="/" />
      ) : (
        <LoginForm handleSuccess={this.handleSuccess} />
      )
    )
  }
}

export default Login;