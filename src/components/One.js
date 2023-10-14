import React from "react";
export const One = ({ incrementgoals, decrementgoals }) => {
  return (
    <div className="one">
      <button onClick={incrementgoals}>increment</button>
      <button onClick={decrementgoals}>decrement</button>
    </div>
  );
};
