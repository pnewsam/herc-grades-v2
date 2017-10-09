import React from 'react';

const ListItem = props => {
  return (
    <div>
      <h2 className="title is-2">
        {props.courseName}, Period {props.period}
      </h2>
      <h4 className="title is-4">
        {props.academicYearStart} - {props.academicYearEnd}
      </h4>
    </div>
  );
};

export default ListItem;
