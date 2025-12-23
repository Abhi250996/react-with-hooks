import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Theme() {
  const { state, dispatch } = useContext(ThemeContext);

  if (!state) return <div className="container">Loading...</div>;

  return (
    <div
      className="container"
      style={{
        background: state.dark ? "#222" : "#fff",
        color: state.dark ? "#fff" : "#333",
        minHeight: "200px",
        transition: "0.3s",
      }}
    >
      <h2>Theme Page</h2>
      <p>Current theme: {state.dark ? "Dark" : "Light"}</p>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle Theme</button>
    </div>
  );
}
