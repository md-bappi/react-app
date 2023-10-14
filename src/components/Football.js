import React from "react";
function Football() {
  const gameName = "badminton";
  return (
    <div>
      <h1>
        I love {gameName} {gameName === "batminton" ? "🏸" : "⚾"}
      </h1>
      <h1>
        {new Date().toLocaleString("bn-us", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </h1>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "I love football ⚾")
  // );
}
export default Football;
