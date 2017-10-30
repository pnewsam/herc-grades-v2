import React from 'react';
import Section from '../../components/Section/Section';

const Show = ({ match }) => {
  return (
    <div>
      <Section id={match.params.id} />
    </div>
  );
};

export default Show;
