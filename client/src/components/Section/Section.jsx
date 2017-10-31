import React, { Component } from 'react';
import axios from 'axios';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      section: {},
    };
  }
  componentDidMount() {
    console.log('Id is: ' + this.id);
    axios({
      method: 'get',
      url: `/api/sections/${this.id}`,
    })
      .then(r => {
        console.log(r);
        this.setState({
          section: r.data,
        });
        console.log(this.state);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <h2 className="title is-2">{this.state.section.name || 'Section'}</h2>
      </div>
    );
  }
}

export default Section;
