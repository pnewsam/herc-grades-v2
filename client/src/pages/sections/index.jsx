import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Header from '../../components/bulma/Header';
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
      <Switch>
        <Route path={match.url + '/new'} component={New} />
        <Route path={match.url + '/:id/edit'} component={Edit} />
        <Route path={match.url + '/:id'} component={Show} />
        <Route path={match.url} component={SectionList} />
      </Switch>
    </div>
  );
};



export default Sections;
