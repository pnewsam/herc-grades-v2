import React from 'react';
import { Link, Route } from 'react-router-dom';

import Header from '../../components/bulma/Header';
import Section from '../../components/bulma/Section';
import SectionList from '../../components/SectionList/SectionList';
import New from './new';

const Sections = ({ match }) => {
  return (
    <div>
      <Header title="Sections">
        <ul>
          <li>
            <Link to="/sections/new">Create a New Section</Link>
          </li>
        </ul>
      </Header>
      <Section>
        <Route path={match.url + '/new'} component={New} />
        <SectionList path={match.url} />
      </Section>
    </div>
  );
};

export default Sections;
