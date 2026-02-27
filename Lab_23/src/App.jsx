import React from "react";
import Q1 from "./components/Q1_UseImperativeHandle";
import Q2 from "./components/Q2_UseLayoutEffect";
import Q3 from "./components/Q3_PrimeSum";
import Q4 from "./components/Q4_PrimeSumWithMemo";
import Q5 from "./components/Q5_UseOptimistic";

function App() {
  return (
    <div>
      <Q1 />
      <hr />
      <Q2 />
      <hr />
      <Q3 />
      <hr />
      <Q4 />
      <hr />
      <Q5 />
    </div>
  );
}

export default App;