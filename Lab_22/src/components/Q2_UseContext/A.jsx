import React from "react";
import B from "./B";
import MyContext from "./MyContext";

function A() {
  const message = "Hello from Q2 - useContext Hook";

  return (
    <MyContext.Provider value={message}>
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>Q2 - Component A</h2>
        <B />
      </div>
    </MyContext.Provider>
  );
}

export default A;