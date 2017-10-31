import React from 'react';
import EditSectionForm from '../../components/EditSectionForm/EditSectionForm';
import SectionNav from '../../components/SectionNav';
import BSection from '../../components/bulma/BSection';

const Edit = ({ match }) => {
  return (
    <div>
      <SectionNav />
      <BSection>
        <h2 className="title is-2">Edit this Section</h2>
        <EditSectionForm id={match.params.id} />
      </BSection>
    </div>
  );
};

export default Edit;
