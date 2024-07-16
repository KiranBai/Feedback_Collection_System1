import React from 'react';

function DialogBox({ message }) {
  let className = "dialog-box";
  if (message === "User not found, No record existed" || message === "Wrong Password") {
    className += " error";
  }

  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
}

export default DialogBox;
