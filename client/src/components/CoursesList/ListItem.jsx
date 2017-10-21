import React from 'react';

const ListItem = props => {
  return (
    <div>
      <h2 className="title is-2">{props.name}</h2>
      <h4 className="title is-4">Subtitle</h4>
    </div>
  );
};

export default ListItem;
