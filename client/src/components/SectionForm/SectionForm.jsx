import React, { Component } from 'react';
import FormField from '../bulma/FormField';
import axios from 'axios';
import { headers } from '../../utils/apiUtil';

export class SectionForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    axios('/api/sections', {
      method: 'post',
      headers: headers(),
      data: {
        name: this.state.name,
      },
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
      <form onSubmit={this.handleSubmit}>
        <FormField label="name">
          <input
            type="text"
            className="input"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormField>
        <button className="button is-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default SectionForm;
