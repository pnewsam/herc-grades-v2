import React from 'react';

const Header = props => {
  return (
    <section className="hero is-primary is-small">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title is-1">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <nav className="tabs is-boxed">{props.children}</nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
