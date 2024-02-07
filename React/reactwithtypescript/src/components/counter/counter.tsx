import React, { useState } from "react";

const Counter = () => {
  // 1. count is any variable(state)
  // 2. setCount is a setter method to change count

  let [state, setState] = useState({ count: 0, age: 18 });

  return (
    <div>
      <p>Count : {state.count} </p>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        ++
      </button>
      <hr />
      <p>Age : {state.age} </p>
      <button onClick={() => setState({ ...state, age: state.age + 1 })}>
        ++
      </button>
    </div>
  );
};

export default Counter;
