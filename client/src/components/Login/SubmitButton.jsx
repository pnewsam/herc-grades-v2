import React from "react";

const SubmitButton = (props) => {
  let classNames = "button is-primary";
  if (props.isFetching) {
    classNames.concat(" is-loading");
  }
  return(
    <button
      className={classNames}
      type="submit"
    >
      Submit
    </button>
  )
}

export default SubmitButton;