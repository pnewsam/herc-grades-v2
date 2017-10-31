import React from 'react';
import EditSectionForm from '../../components/EditSectionForm/EditSectionForm';

const Edit = ({ match }) => {
  return (
    <div>
      <h2 className="title is-2">Edit this Section</h2>
      <EditSectionForm id={match.params.id} />
    </div>
  );
};

export default Edit;
