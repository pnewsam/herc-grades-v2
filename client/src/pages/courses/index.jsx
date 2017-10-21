import React from 'react';
import { Link, Route } from 'react-router-dom';

import Header from '../../components/bulma/Header';
import Section from '../../components/bulma/Section';
import CoursesList from '../../components/CoursesList/CoursesList';
import New from './new';

const Courses = ({ match }) => {
  return (
    <div>
      <Header title="Courses">
        <ul>
          <li>
            <Link to="/courses/new">Create a New Course</Link>
          </li>
        </ul>
      </Header>
      <Section>
        <Route exact path={match.url} component={CoursesList} />
        <Route path={match.url + '/new'} component={New} />
      </Section>
    </div>
  );
};

export default Courses;
