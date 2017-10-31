import React from 'react';
import SectionForm from '../../components/SectionForm/SectionForm';
import BSection from '../../components/bulma/BSection';

const New = () => {
  return (
    <BSection>
      <h2 className="title is-2">Create a New Section</h2>
      <SectionForm />
    </BSection>
  );
};

export default New;
