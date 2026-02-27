import React from "react";
import Q1A from "./components/Q1_NoHooks/A";
import Q2A from "./components/Q2_UseContext/A";
import Q3_DebugValue from "./components/Q3_DebugValue";
import Q4_DeferredValue from "./components/Q4_DeferredValue";

function App() {
  return (
    <div>
      <Q1A />
      <hr />
      <Q2A />
      <hr />
      <Q3_DebugValue />
      <hr />
      <Q4_DeferredValue />
    </div>
  );
}

export default App;