import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "24px" }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginRight: "10px" }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
