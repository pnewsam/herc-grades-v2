import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = props => {
  return (
    <div>
      <h2 className="title is-2">
        <Link to={`/sections/${props.id}`}>{props.name}</Link>
      </h2>
    </div>
  );
};

export default ListItem;
