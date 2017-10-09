import React from 'react';

const New = () => {
  return (
    <div>
      <h2 className="title is-2">Create a New Course</h2>
      <form action="">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input type="text" className="input" />
      </form>
    </div>
  );
};

export default New;
