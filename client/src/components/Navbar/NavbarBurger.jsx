import React from "react";

const NavbarBurger = (props) => {
  let classNames = "navbar-burger"
  if (props.isActive) {
    classNames += " is-active"
  }
  return(
    <div className={classNames} onClick={props.handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default NavbarBurger;