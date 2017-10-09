import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/bulma/Header';
import Section from '../../components/bulma/Section';
import New from './new';

const Courses = ({ match }) => {
  return (
    <div>
      <Header title="Courses">
        <ul>
          <li>
            <a href="/courses/new">Create a New Course</a>
          </li>
        </ul>
      </Header>
      <Section>
        <Route path={match.url + '/new'} component={New} />
      </Section>
    </div>
  );
};

export default Courses;
