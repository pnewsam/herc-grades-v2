import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      section: {
        students: [],
      },
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
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
            </tr>
          </thead>
          <tbody>
            {this.state.section.students.map(s => {
              return (
                <tr>
                  <td>{s.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Section;
