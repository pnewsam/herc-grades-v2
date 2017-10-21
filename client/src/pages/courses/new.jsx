import React, { Component } from 'react';

import CourseForm from '../../components/CourseForm/CourseForm';

const New = () => {
  return (
    <div>
      <h2 className="title is-2">Create a New Course</h2>
      <CourseForm />
    </div>
  );
};

export default New;
