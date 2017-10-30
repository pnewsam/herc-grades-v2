import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';
import { headers } from '../../utils/apiUtil';

class SectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }
  componentDidMount() {
    axios
      .get('/api/sections', {
        headers: headers(),
      })
      .then(response => {
        console.log(response);
        this.setState({ sections: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.sections.map(s => (
          <ListItem name={s.name} key={s.id} id={s.id} />
        ))}
      </div>
    );
  }
}

export default SectionList;
