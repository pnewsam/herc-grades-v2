import React from 'react';

const BSection = props => {
  return (
    <section className="section">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default BSection;
