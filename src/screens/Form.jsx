import { useId } from "react";

export default function Form() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} />
    </div>
  );
}
