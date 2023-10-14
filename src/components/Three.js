import React from "react";

export const Three = ({ incrementnumber, decrementnumber }) => {
  return (
    <div className="three">
      <button onClick={incrementnumber}>increment</button>
      <button onClick={decrementnumber}>decrement</button>
    </div>
  );
};
