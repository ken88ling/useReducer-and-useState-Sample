import React from "react";
import { useImmerReducer } from "use-immer";
import "./styles.css";

const initialState = { count: 0, firstName: "" };

const reducer = (draft, action) => {
  switch (action.type) {
    case "increment":
      return void draft.count++;
    case "type":
      return { firstName: action.firstName, count: draft.count + 1 };
    default:
      return draft;
  }
};

export default function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>App 5</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <div>count : {state.count}</div>

      <input
        value={state.firstName}
        onChange={(e) => {
          const firstName = e.target.value;
          dispatch({ type: "type", firstName });
        }}
      />
    </div>
  );
}
