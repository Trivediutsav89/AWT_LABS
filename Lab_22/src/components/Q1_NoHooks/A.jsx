import React from "react";
import B from "./B";
import MyContext from "./MyContext";

function A() {
  const message = "Hello from Q1 - No Hooks";

  return (
    <MyContext.Provider value={message}>
      <div style={{ border: "2px solid green", padding: "10px" }}>
        <h2>Q1 - Component A</h2>
        <B />
      </div>
    </MyContext.Provider>
  );
}

export default A;