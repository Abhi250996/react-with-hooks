import React, { useRef, useLayoutEffect, useState } from "react";

export default function Layout({ boxWidth = "60%" }) {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  // useLayoutEffect runs **before painting**
  useLayoutEffect(() => {
    if (boxRef.current) setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div
      className="container"
      style={{ minHeight: "200px", transition: "0.3s" }}
    >
      <h2>Layout Effect Demo</h2>
      <div
        ref={boxRef}
        style={{
          width: boxWidth,
          height: "100px",
          background: "#1e90ff",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        Resize me!
      </div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
}
