import React, { useContext } from "react";
import MyContext from "./MyContext";

function C() {
  const value = useContext(MyContext);

  return (
    <div>
      <h4>Component C</h4>
      <p>{value}</p>
    </div>
  );
}

export default C;