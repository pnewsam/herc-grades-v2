import React, { Component } from 'react';
import axios from 'axios';
import { headers } from '../../utils/apiUtil';

export class CoursesList extends Component {
  componentDidMount() {
    axios
      .get('/api/courses', {
        headers: headers()
      })
      .then(response => {
        console.log(response);
        this.setState({ sections: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return <div />;
  }
}

export default CoursesList;
