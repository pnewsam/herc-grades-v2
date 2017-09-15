import React from "react";

const NavbarMenu = (props) => {
  let classNames = "navbar-menu";
  if (props.isActive) {
    classNames += " is-active"
  }
  return(
    <div className={classNames}>
      <div className="navbar-start">
        {props.start}
      </div>
      <div className="navbar-end">
        {props.children}
      </div>
    </div>
  )
}

export default NavbarMenu;