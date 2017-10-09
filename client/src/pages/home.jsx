import React from 'react';
import Header from '../components/bulma/Header';
import Section from '../components/bulma/Section';

const Home = () => {
  return (
    <div>
      <Header title="Home" />
      <Section>
        <h2 className="title is-2">
          <a href="/sections">Sections</a>
        </h2>
        <h2 className="title is-2">
          <a href="/courses">Courses</a>
        </h2>
      </Section>
    </div>
  );
};

export default Home;
