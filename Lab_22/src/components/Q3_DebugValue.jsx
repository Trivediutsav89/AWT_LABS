import React, { useState, useDebugValue } from "react";

function useCustomCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  useDebugValue(count > 5 ? "High Value" : "Low Value");

  return [count, setCount];
}

function Q3_DebugValue() {
  const [count, setCount] = useCustomCounter(0);

  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      <h2>Q3 - useDebugValue Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Q3_DebugValue;