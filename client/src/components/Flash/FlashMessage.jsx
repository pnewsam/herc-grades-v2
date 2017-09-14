import React from "react";

const FlashMessage = (props) => {
  let classNames = "notification has-text-centered";
  if (props.type) {
    classNames += " is-" + props.type;
  };
  return(
  <p className={classNames}>
    {props.message}
  </p>
  )
}

export default FlashMessage;