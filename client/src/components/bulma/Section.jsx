import React from 'react';

const Section = props => {
  return (
    <section className="section">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
