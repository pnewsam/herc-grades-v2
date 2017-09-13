import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <p>HercGrades</p>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
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
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;