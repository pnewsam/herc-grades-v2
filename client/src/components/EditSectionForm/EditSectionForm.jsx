import React, { Component } from 'react';
import FormField from '../bulma/FormField';
import axios from 'axios';
import { store } from '../../index';
import { headers } from '../../utils/apiUtil';
import { showFlash, hideFlash } from '../../actions/flashActions';

export class EditSectionForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = props.id;
    this.state = {
      name: '',
    };
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: `/api/sections/${this.id}`,
    })
      .then(r => {
        console.log(r);
        this.setState({
          name: r.data.name,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    axios(`/api/sections/${this.id}`, {
      method: 'put',
      headers: headers(),
      data: {
        name: this.state.name,
      },
    })
      .then(r => {
        console.log(r);
        store.dispatch(showFlash(r.message, 'success'));
        setTimeout(() => {
          store.dispatch(hideFlash());
        }, 3000);
      })
      .catch(e => {
        console.log(e);
        store.dispatch(showFlash(e.message, 'danger'));
        setTimeout(() => {
          store.dispatch(hideFlash());
        }, 3000);
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

export default EditSectionForm;
