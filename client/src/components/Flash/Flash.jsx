import React from "react";
import FlashMessage from "./FlashMessage";

const Flash = (props) => {
  return(
    <div>
      {props.messages.map((message, index) => {
        console.log(message);
        return(
          <FlashMessage key={index} message={message.message} type={message.type} />
        )
      })}
    </div>
  );
}

export default Flash;