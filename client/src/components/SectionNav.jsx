import React from 'react';
import { Link } from 'react-router-dom';

const SectionNav = props => {
  return (
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-tabs">
          <Link
            className="navbar-item is-tab"
            to={`/sections/${props.id}/edit`}
          >
            Edit this Section
          </Link>

          <Link
            className="navbar-item is-tab"
            to={`/sections/${props.id}/students/new`}
          >
            Add a Student
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
