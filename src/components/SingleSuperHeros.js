import React from "react";

export const SingleSuperHeros = ({ hero }) => {
  return (
    <div className="superhero">
      <h1>I am {hero.name}</h1>
      <p>Age: {hero.age}</p>
      <p>skill : {hero.skill}</p>
    </div>
  );
};
