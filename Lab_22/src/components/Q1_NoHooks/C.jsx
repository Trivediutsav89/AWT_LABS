import React from "react";
import MyContext from "./MyContext";

function C() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <div>
          <h4>Component C</h4>
          <p>{value}</p>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default C;