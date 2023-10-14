import React from "react";

export const Two = ({ incrementcount, decrementcount }) => {
  return (
    <div className="two">
      <button onClick={incrementcount}>increment</button>
      <button onClick={decrementcount}>decrement</button>
    </div>
  );
};
