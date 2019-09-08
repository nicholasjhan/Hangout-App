import React from "react";

export default function Public() {
  function add(i) {}
  function remove(i) {}

  return (
    <div>
      <hr />
      <p />
      {friendlist.map((v, i) => (
        <div>
          {v}
          <button onClick={() => remove(i)}>-</button>
        </div>
      ))}
      <hr />
      <p />
      suggestion
      {suggestion.map((v, i) => (
        <div>
          {v}
          <button onClick={() => add(i)}>+</button>
        </div>
      ))}
    </div>
  );
}
