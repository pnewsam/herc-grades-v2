import React, { Component } from 'react';
import axios from 'axios';

export class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.action = props.action;
    this.objName = props.objName;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    axios(this.action, {
      method: 'delete',
    })
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <a className="navbar-item is-tab" onClick={this.handleClick}>
        Delete this {this.objName}
      </a>
    );
  }
}

export default DeleteButton;
