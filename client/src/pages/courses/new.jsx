import React, { Component } from 'react';

import NewCourseForm from '../../components/NewCourseForm/NewCourseForm';

const New = () => {
  return (
    <div>
      <h2 className="title is-2">Create a New Course</h2>
      <NewCourseForm />
    </div>
  );
};

export default New;
