import React from "react";
const persons = [
  {
    id: 1,
    name: "bappy",
    age: 20,
    skill: "react",
  },
  {
    id: 22,
    name: "sadril",
    age: 22,
    skill: "javascript",
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
    name: "jubayer",
    age: 20,
    skill: "vue",
  },
  {
    id: 7,
    name: "nazmul",
    age: 18,
    skill: "react",
  },
];
// export const Person = () => {
//   return (
//     <div>
//       {persons.map((person) => {
//         <h1>
//           I am {person.name}. my age is {person.age}. I'm good at {person.skill}
//         </h1>;
//       })}
//     </div>
//   );
// };

export const Person = () => {
  return (
    <div>
      {persons.map((person) => (
        <h1 key={person.id}>
          ID: {person.id} : I am {person.name}. my age is {person.age}. I'm good
          at {person.skill}
        </h1>
      ))}
    </div>
  );
};
