import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
    clearInput() {
      inputRef.current.value = "";
    }
  }));

  return <input ref={inputRef} placeholder="Type something..." />;
});

function Q1_UseImperativeHandle() {
  const childRef = useRef();

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Q1 - useImperativeHandle</h2>
      <Child ref={childRef} />
      <br /><br />
      <button onClick={() => childRef.current.focusInput()}>
        Focus Input
      </button>
      <button onClick={() => childRef.current.clearInput()}>
        Clear Input
      </button>
    </div>
  );
}

export default Q1_UseImperativeHandle;