import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
            <a href="/sections/new">Create a New Section</a>
          </li>
        </ul>
      </Header>
      <Section>
        <Route path={match.url + '/new'} component={New} />
        <SectionList />
      </Section>
    </div>
  );
};

export default Sections;
