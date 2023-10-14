import React from "react";
import { SingleSuperHeros } from "./SingleSuperHeros";

export const SuperHeros = () => {
  const heros = [
    {
      id: 1,
      name: "bappy",
      age: 20,
      skill: "react",
    },
    {
      id: 3,
      name: "fahim",
      age: 18,
      skill: "vue",
    },
    {
      id: 4,
      name: "taufiq",
      age: 20,
      skill: "angular",
    },
    {
      id: 5,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 6,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 7,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 8,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 9,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 10,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 11,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 12,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 13,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 14,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 15,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 16,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 17,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 18,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 19,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 20,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 21,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 22,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 23,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 24,
      name: "shamim",
      age: 22,
      skill: "react",
    },
    {
      id: 25,
      name: "shamim",
      age: 22,
      skill: "react",
    },
  ];
  return (
    <div className="superhero-wrapper">
      {heros.map((hero) => (
        <SingleSuperHeros hero={hero} key={hero.id} />
      ))}
    </div>
  );
};
