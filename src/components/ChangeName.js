import React from "react";
const ChangeName = ({ name, birthYear }) => {
  // props received
  // name = "Mr. A"; // manipulate
  return (
    <div>
      <h1>
        hello {name}, age {new Date().getFullYear() - birthYear}
      </h1>
    </div>
  );
};
export default ChangeName;
