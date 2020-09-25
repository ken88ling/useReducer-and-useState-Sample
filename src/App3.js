import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [{ count, firstName }, setData] = useState({
    count: 0,
    firstName: ""
  });

  return (
    <div className="App">
      <h1>App 3</h1>

      <button onClick={() => setData((d) => ({ ...d, count: d.count + 1 }))}>
        +
      </button>

      <div>count : {count}</div>

      <input
        value={firstName}
        onChange={(e) => {
          const firstName = e.target.value;
          setData((d) => ({
            firstName,
            count: d.count + 1
          }));
        }}
      />
    </div>
  );
}
