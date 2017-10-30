import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/bulma/Header';
import Section from '../components/bulma/BSection';

const Home = () => {
  return (
    <div>
      <Header title="Home">
        <ul>
          <li>
            <Link to="/sections">Sections</Link>
          </li>
        </ul>
      </Header>
      <Section>
        <h2 className="title is-2">
          <Link to="/sections">Sections</Link>
        </h2>
      </Section>
    </div>
  );
};

export default Home;
