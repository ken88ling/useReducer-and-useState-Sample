import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");

  return (
    <div className="App">
      <h1>App</h1>

      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <div>count : {count}</div>

      <input
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
    </div>
  );
}
