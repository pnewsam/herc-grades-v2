import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';
import DeleteButton from '../../components/DeleteButton';
import BSection from '../../components/bulma/BSection';
import SectionNav from '../../components/SectionNav';

const Show = ({ match }) => {
  return (
    <div>
      <SectionNav id={match.params.id} />
      <BSection>
        <Section id={match.params.id} />
        <DeleteButton
          action={`/api/sections/${match.params.id}`}
          objName="Section"
        />
      </BSection>
    </div>
  );
};

export default Show;
