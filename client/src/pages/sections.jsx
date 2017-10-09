import React, { Component } from 'react';
import axios from 'axios';

import { headers } from '../utils/apiUtil';

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  componentDidMount() {
    axios
      .get('/api/sections', {
        headers: headers()
      })
      .then(response => {
        this.setState({ sections: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <h2>Sections</h2>
      </div>
    );
  }
}

export default Sections;
