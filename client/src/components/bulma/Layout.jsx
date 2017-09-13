import React from "react";

const Layout = (props) => {
  return(
    <div className="container">
      <section className="section">
        {props.children}
      </section>
    </div>
  )
}

export default Layout;