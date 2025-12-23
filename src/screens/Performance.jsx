import { useState, useTransition, useDeferredValue } from "react";

export default function Performance() {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredText = useDeferredValue(text);

  const list = Array(2000).fill(deferredText);

  return (
    <div>
      <h2>Performance Screen</h2>
      <input onChange={(e) => startTransition(() => setText(e.target.value))} />
      {isPending && <p>Updating...</p>}
      <ul>
        {list.slice(0, 20).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
