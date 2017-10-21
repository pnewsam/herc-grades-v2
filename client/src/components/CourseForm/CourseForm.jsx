import React, { Component } from 'react';
import FormField from '../../components/bulma/FormField';
import axios from 'axios';
import { headers } from '../../utils/apiUtil';
import { setBrowserSession } from '../../utils/authUtil';

class NewCourseForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/api/courses',
      data: new FormData(e.target),
      headers: headers()
    })
      .then(response => {
        console.log(response);
        setBrowserSession(response);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormField label="name">
          <input
            type="text"
            name="name"
            className="input"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </FormField>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default NewCourseForm;
