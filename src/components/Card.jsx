import React from "react";

export default function Card({ title, body, children }) {
  return (
    <div
      style={{
        padding: 15,
        marginBottom: 10,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#f9f9f9",
      }}
    >
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p>{body}</p>
      {children}
    </div>
  );
}
