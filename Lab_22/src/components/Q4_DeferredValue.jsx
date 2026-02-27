import React, { useState, useDeferredValue } from "react";

function Q4_DeferredValue() {
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>Q4 - useDeferredValue Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Immediate Value: {input}</p>
      <p>Deferred Value: {deferredValue}</p>
    </div>
  );
}

export default Q4_DeferredValue;