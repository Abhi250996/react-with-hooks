import React, { useState, useEffect } from "react";

function Home(props) {
  const initialCount = props.initialCount || 0;
  const [count, setCount] = useState(initialCount);

  useEffect(
    function () {
      document.title = `Count: ${count}`;
    },
    [count]
  );

  function handleIncrement() {
    setCount(function (c) {
      return c + 1;
    });
  }

  return (
    <div className="container">
      <h2>Home Screen</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Home;
