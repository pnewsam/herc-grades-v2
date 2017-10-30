import React from 'react';
import { Link, Route } from 'react-router-dom';

import Header from '../../components/bulma/Header';
import BSection from '../../components/bulma/BSection';
import SectionList from '../../components/SectionList/SectionList';
import New from './new';
import Edit from './edit';
import Show from './show';

const Sections = ({ match }) => {
  return (
    <div>
      <Header title="Sections">
        <ul>
          <li>
            <Link to="/sections">All Sections</Link>
          </li>
          <li>
            <Link to="/sections/new">Create a New Section</Link>
          </li>
        </ul>
      </Header>
        <Route exact path={match.url + '/edit'} component={Edit} />
        <Route path={match.url + '/:id'} component={Show} />
    </div>
  );
};

export default Sections;
