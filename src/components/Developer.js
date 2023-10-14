import React from "react";
const Developer = () => {
  const isDeveloper = false;
  return (
    <div>
      {isDeveloper ? (
        <h1>I am a web developer</h1>
      ) : (
        <h1>I am a data scientist</h1>
      )}
      <h1>{isDeveloper ? "I am a web developer" : "I am a data scientist"}</h1>
      <h1>I am {isDeveloper ? "" : "not"} a web developer</h1>
    </div>
  );
};
export default Developer;
