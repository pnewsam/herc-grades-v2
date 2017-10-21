import React, { Component } from 'react';
import axios from 'axios';
import { headers } from '../../utils/apiUtil';
import ListItem from './ListItem';

export class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }
  componentDidMount() {
    axios
      .get('/api/courses', {
        headers: headers()
      })
      .then(response => {
        console.log(response.data);
        console.log(response.data.map(obj => Object.values(obj)));
        this.setState({
          courses: response.data.map(obj => Object.values(obj))
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">Courses List</h1>
        {this.state.courses.map(c => (
          <ListItem key={c.id} courseName={c.name} />
        ))}
      </div>
    );
  }
}

export default CoursesList;
