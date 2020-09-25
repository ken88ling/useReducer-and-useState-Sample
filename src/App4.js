import React, { useReducer } from "react";
import "./styles.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "type":
      return { firstName: action.firstName, count: state.count + 1 };
    default:
      return state;
  }
};

export default function App() {
  const [{ count, firstName }, dispatch] = useReducer(reducer, {
    count: 0,
    firstName: ""
  });

  return (
    <div className="App">
      <h1>App 4</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <div>count : {count}</div>

      <input
        value={firstName}
        onChange={(e) => {
          const firstName = e.target.value;
          dispatch({ type: "type", firstName });
        }}
      />
    </div>
  );
}
