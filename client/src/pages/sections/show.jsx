import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';
import DeleteButton from '../../components/DeleteButton';

const Show = ({ match }) => {
  return (
    <div>
      <Section id={match.params.id} />
      <Link to={`/sections/${match.params.id}/edit`} className="button is-info">
        Edit this Section
      </Link>
      <DeleteButton
        action={`/api/sections/${match.params.id}`}
        objName="Section"
      />
    </div>
  );
};

export default Show;
