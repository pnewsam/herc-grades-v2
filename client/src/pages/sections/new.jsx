import React from 'react';

const New = () => {
  return (
    <div>
      <h2 className="title is-2">Create a New Section</h2>
      <form action="">
        <label htmlFor="Course" className="label">
          Course
        </label>
        <input type="text" className="input" />
      </form>
    </div>
  );
};

export default New;
