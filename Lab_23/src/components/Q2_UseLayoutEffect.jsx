import React, { useRef, useLayoutEffect, useState } from "react";

function Q2_UseLayoutEffect() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Q2 - useLayoutEffect</h2>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "50px", background: "lightblue" }}
      />
      <p>Box Width: {width}px</p>
    </div>
  );
}

export default Q2_UseLayoutEffect;